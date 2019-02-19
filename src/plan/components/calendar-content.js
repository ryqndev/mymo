import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {updateSelection} from '../../components/actions/selection';

const dayNamesCompact = ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'];
const DAY_POS = [{}, {}, {}, {}, {}, {}, {}];
let currentSelection = [];
let lastSelected;
const daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function toggleDate(id, singleClick){
    let curHover = document.getElementById(id);
    if(curHover.textContent){
        if(!curHover.classList.contains('day-disabled') && (singleClick || id !== lastSelected )){
            if(!(curHover.classList.contains('day-selected') || curHover.textContent === "")){
                curHover.classList.add('day-selected'); 
                addedSelection(curHover);
                adjustAround(curHover);
                currentSelection.push(curHover);
            }else{
                curHover.classList.remove('day-selected');
                adjustAround(curHover);
                currentSelection.splice(currentSelection.indexOf(curHover), 1);
            }
            lastSelected = singleClick ? null : id;
        }
    }
}
function setupDragFunction(){
    document.getElementById('dates--interactive').addEventListener('mouseover', function(e) {  
        e.preventDefault();
        if(e.buttons === 1 && e.target.id.substr(0, 3) === 'day'){
            toggleDate(e.target.id, false);
        }
    }, false);
    document.getElementById('dates--interactive').addEventListener('touchmove', function(e) {  
        e.preventDefault();
        let cliY = e.targetTouches[0].clientY >> 0;
        let cliX = e.targetTouches[0].clientX >> 0;
        for(let e of DAY_POS){
            if(cliX >= e['x1'] && cliX <= e['x2']){
                for(let el of e['yPos']){
                    if(cliY >= el['y1'] && cliY <= el['y2'] && (el['name'] !== lastSelected)){
                        toggleDate(el['name'], false);
                    }
                }
            }
        }
    }, false);
    for(let i = 0; i < 42; i++){
        let divBox = document.getElementById('day' + i).getBoundingClientRect();
        for(let e of DAY_POS){
            if(i < 7){
                DAY_POS[i]['x1'] = Math.round(divBox.left);
                DAY_POS[i]['x2'] = Math.round(divBox.right);
                DAY_POS[i]['yPos'] = [];
                DAY_POS[i]['yPos'].push({
                    'y1' : Math.round(divBox.top),
                    'y2' : Math.round(divBox.bottom),
                    'name': 'day' + i
                });
                break;
            }else if(Math.round(divBox.left) === e['x1']){
                e['yPos'].push({
                    'y1' : Math.round(divBox.top),
                    'y2' : Math.round(divBox.bottom),
                    'name': 'day' + i
                });
            }
        };
    }
}
function addedSelection(id){
    if(!id.classList.contains('calendar__day--clear')){
        id.classList.remove('day-left', 'day-right');
        let leftRemove  = id.previousSibling.classList.contains('calendar__day--clear') || !id.previousSibling.classList.contains('day-selected'),
            rightRemove = id.nextSibling.classList.contains('calendar__day--clear') || !id.nextSibling.classList.contains('day-selected');
        if(leftRemove){
            id.classList.add('day-left');
        }
        if(rightRemove){
            id.classList.add('day-right');
        } 
    }
}
function adjustAround(id){
    addedSelection(id.nextSibling);
    addedSelection(id.previousSibling);
}
export class CalendarContent extends Component {
    state = {
        vMonth: this.props.month,
        vYear: this.props.year,
        sDate: this.props.start,
        eDate: this.props.end
    }
    componentDidMount(){
        for(let j = -1; j < 6; j++){
            for(let i = 0; i < 7; i++){
                let day = document.getElementById('dates--interactive').appendChild(document.createElement("div"));
                day.className = 'calendar__day';
                if(j < 0){
                    day.textContent = dayNamesCompact[i];
                    day.classList.add('day-name');
                }else{
                    day.id = 'day' + (j*7 + i);
                    day.onmousedown = function(){toggleDate('day' + (j*7 + i), true);};
                }
            }
            let clear = document.getElementById('dates--interactive').appendChild(document.createElement("div"));
            clear.className = 'calendar__day--clear';
        }
        setupDragFunction();
        this.componentDidUpdate();
    };
    updateHold = (event) => {
        event.persist();
        if(event.buttons === 1){
            this.update();
        }
    }
    update = () => {
        this.props.updateSelection(currentSelection.map(e => {
            let obj = {};
            obj['key'] = `${ this.props.month}${ e.innerText }${this.props.year}`;
            obj['title'] = `${ this.props.month + 1 }/${ e.innerText }/${ this.props.year%100}`;
            obj['sortValue'] = (this.props.month*32 + parseInt(e.innerText) + (this.props.year % 100) * 400);
            obj['month'] = [this.props.month, this.props.year];
            obj['div'] = e.id;
            return obj;
        }).sort((a, b) => (a['sortValue'] - b['sortValue'])));
    }
    componentDidUpdate(props){
        document.getElementById('dates--interactive').childNodes.forEach(e => {
            if(e.classList.contains('calendar__day') && !e.classList.contains('day-name')){
                e.textContent = "";
                e.classList = 'calendar__day';
            }
        });
        let date = new Date();
        let tempDay = new Date(this.props.year, this.props.month, 1).getDay();    
        for(let i = 1; i <= daysPerMonth[this.props.month]; i++){
            let toGenerate = new Date(this.props.year, this.props.month, i);
            document.getElementById( 'day' + tempDay ).textContent =  i;
            if( toGenerate.getDate() === date.getDate() && 
                toGenerate.getMonth() === date.getMonth() && 
                toGenerate.getFullYear() === date.getFullYear()
              ){
                document.getElementById( 'day' + tempDay ).classList.add('day-today');
            }
            if(toGenerate.getTime() > this.state.eDate.getTime() || toGenerate.getTime() < this.state.sDate.getTime()){
                document.getElementById( 'day' + tempDay ).classList.add('day-disabled');
            }
            tempDay++;
        }
        if(props){
            this.updateCurrentSelection( props['selection']);
        }
    };
    updateCurrentSelection = (divs) => {
        currentSelection = [];
        divs.map(e => e['div']).forEach(e => {
            toggleDate(e);
        })
    }
    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.selection && this.props.selection && (nextProps.selection.length !== currentSelection.length)){
            this.updateCurrentSelection(nextProps['selection']);
        }
        return nextProps.month !== this.props.month || nextProps.year !== this.props.year;
    }
    render() {
        return (
            <div id="calendar">
                <div id="dates--interactive" onMouseDown={this.update} onMouseMove={this.updateHold}></div>
            </div>
        );
    }
}
function mapStateToProps(state){
    return {
        selection: state.selection
    }
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({updateSelection: updateSelection}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(CalendarContent);
