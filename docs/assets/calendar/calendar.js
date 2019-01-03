/**
 * @author Ryan Yang
 */
const date = new Date();
const daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const monthNamesLong = [' January', ' February', ' March', ' April', ' May', ' June', ' July', ' August', ' September', ' October', ' November', ' December'];
const dayNames = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
const dayNamesCompact = ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'];
let daysAhead;
const DAY_POS = [{}, {}, {}, {}, {}, {}, {}];
let lastSelected;
let currentMonth, currentYear;
let sd, ed;

function createCalendar(){
    for(let j = -1; j < 6; j++){
        for(let i = 0; i < 7; i++){
            let day = document.getElementById('dates--interactive').appendChild(document.createElement("div"));
            day.className = 'calendar__day';
            if(j < 0){
                day.textContent = dayNamesCompact[i];
                day.classList.add('day-name');
            }else{
                day.id = 'day' + (j*7 + i);
            }
            day.onmousedown = function(){toggleDate('day' + (j*7 + i), true);};
        }
        let clear = document.getElementById('dates--interactive').appendChild(document.createElement("div"));
        clear.className = 'calendar__day--clear';
    }
    createMonth(date.getMonth(), date.getFullYear(), sd, ed);
    setupDragFunction();
}
function createMonth(month, year, lowerLimit, upperLimit){
    document.getElementById('dates--interactive').childNodes.forEach(e=>{
        if(e.classList.contains('calendar__day') && !e.classList.contains('day-name')){
            e.textContent = "" ;
            e.classList = 'calendar__day';
        }
    });
    document.getElementById('calendar-title').innerHTML = `<i class="material-icons arrow left btn-floating waves-effect waves-light blue lighten-4" onclick="prevMonth();">keyboard_arrow_left</i>${monthNamesLong[month]}
    <i class="material-icons arrow right btn-floating waves-effect waves-light blue lighten-4" onclick="nextMonth();">keyboard_arrow_right</i>` ;
    currentMonth = month;
    currentYear = year;
    let tempDay = new Date(Date.UTC(year, month, 2)).getDay();
    daysAhead = tempDay;

    let llMonth = lowerLimit.getMonth();
    let ulMonth = upperLimit.getMonth();
    let llMonth = lowerLimit.getMonth();
    let llMonth = lowerLimit.getMonth();
    for(let i = 1; i <= daysPerMonth[month]; i++){
        // let toGenerate = new Date(Date.UTC(year, month, i));
        document.getElementById( 'day' + tempDay ).textContent =  i;
        if(toGenerate.toDateString() == date.toDateString()){
            document.getElementById( 'day' + tempDay ).classList.add('day-today');
        }
        if(toGenerate > upperLimit || toGenerate < lowerLimit){
            // console.log(toGenerate > upperLimit, toGenerate, upperLimit);
            document.getElementById( 'day' + tempDay ).classList.add('day-disabled');
        }
        if(toGenerate.getFullYear()){

        }
        if( i == 3){
            console.log(toGenerate);
            console.log(toGenerate.toDateString())//, date.toDateString(), toGenerate.toDateString() == date.toDateString());
            console.log(toGenerate.getFullYear(), lowerLimit.getFullYear(), toGenerate.getFullYear() <= lowerLimit.getFullYear());
            console.log(toGenerate.getFullYear(), upperLimit.getFullYear(), toGenerate.getFullYear() <= upperLimit.getFullYear());
            console.log(toGenerate.getMonth(), lowerLimit.getMonth(), toGenerate.getMonth() <= lowerLimit.getMonth());
            console.log(toGenerate.getMonth(), upperLimit.getMonth(), toGenerate.getMonth() <= upperLimit.getMonth());
            console.log(toGenerate.getDate(), lowerLimit.getDate(), toGenerate.getDate() <= lowerLimit.getDate());
            console.log(toGenerate.getDate(), upperLimit.getDate(), toGenerate.getDate() <= upperLimit.getDate());
            
        
        }
        tempDay++;
    }
}
function nextMonth(){
    (currentMonth + 1 == 12) ? createMonth( 0 , currentYear + 1, sd, ed ) : createMonth( currentMonth + 1 , currentYear, sd, ed );
}
function prevMonth(){
    (currentMonth - 1 == -1) ? createMonth( 11 , currentYear - 1, sd, ed ) : createMonth( currentMonth - 1 , currentYear, sd, ed );
}
function toggleDate(id, singleClick){
    let curHover = document.getElementById(id);
    if(!curHover.classList.contains('day-disabled') && (singleClick || id !== lastSelected )){
        if(!(curHover.classList.contains('day-selected') || curHover.textContent === "")){
            curHover.classList.add('day-selected');
        }else{
            curHover.classList.remove('day-selected');
        }
        lastSelected = singleClick?null:id;
    }
}
function setupDragFunction(){
    //desktop
    document.getElementById('dates--interactive').addEventListener('mouseover', function(e) {  
        e.preventDefault();
        if(e.buttons === 1 && e.target.id.substr(0, 3) === 'day'){
            toggleDate(e.target.id, false);
        }
    }, false);
    //mobile
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
                DAY_POS[i]['yPos'] = new Array();
                DAY_POS[i]['yPos'].push({
                    'y1' : Math.round(divBox.top),
                    'y2' : Math.round(divBox.bottom),
                    'name': 'day' + i
                });
                break;
            }else{
                if(Math.round(divBox.left) == e['x1']){
                    e['yPos'].push({
                        'y1' : Math.round(divBox.top),
                        'y2' : Math.round(divBox.bottom),
                        'name': 'day' + i
                    });
                }
            }
        };
    }
}
function tallyTimes(){
    //create obj with div reference and an array for days
}