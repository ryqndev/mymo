import React, { Component } from 'react';
// import {addDays} from 'date-fns';
import {Link} from 'react-router-dom';
import {IconButton} from '@material-ui/core';
import { connect } from 'react-redux';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Forward from '@material-ui/icons/Forward';
import Edit from '@material-ui/icons/Edit';
import Done from '@material-ui/icons/Done';
import CalendarContent from './calendar-content';
import SelectionList from './selection-list';
import './styles/calendar.css';
import './styles/calendar-options.css';

const monthNamesLong = [' January', ' February', ' March', ' April', ' May', ' June', ' July', ' August', ' September', ' October', ' November', ' December'];

export class Calendar extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: props.name,
            vMonth: props.sd.getMonth(),
            vYear: props.sd.getFullYear()
        };
    }
    nextMonth = () => {
        let hasYearChanged = this.state.vMonth + 1 === 12;
        this.setState((state)=> ({
            vYear : hasYearChanged ? (state.vYear + 1) : state.vYear,
            vMonth : hasYearChanged ? 0 : (state.vMonth + 1)
        }));
    }
    prevMonth = () => {
        let hasYearChanged = this.state.vMonth - 1 === -1;
        this.setState((state)=> ({
            vYear : hasYearChanged ? (state.vYear - 1) : state.vYear,
            vMonth : hasYearChanged ? 11: (state.vMonth - 1)
        }));
    }
    sendPlan = () => {
        console.log(this.props.selection);
    }
    render() {
        return (
            <div>
                <div className="calendar-title">
                    <div className="calendar-arrows">
                        <IconButton onClick={this.prevMonth}>
                            <KeyboardArrowLeft />
                        </IconButton>
                    </div>
                    <div id="calendar-title--text">
                        {monthNamesLong[this.state.vMonth]}, <span>{this.state.vYear}</span>
                    </div>
                    <div className="calendar-arrows">
                        <IconButton onClick={this.nextMonth}>
                            <KeyboardArrowRight />
                        </IconButton>
                    </div>
                </div>
                <CalendarContent month={this.state.vMonth} year={this.state.vYear} start={this.props.sd} end={this.props.ed}/>
                <SelectionList />
                <div className="buttons-suite">
                    <a> {/* eslint-disable-line */}
                        <IconButton className="button-suite--button selected-color" onClick={this.sendPlan}>
                            <Done />
                        </IconButton>
                    </a>
                    <Link to='/edit'>
                        <IconButton className="button-suite--button partial-color">
                            <Edit />
                        </IconButton>
                    </Link>
                    <Link to='/view'>
                        <IconButton className="button-suite--button full-color">
                            <Forward />
                        </IconButton>
                    </Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        selection: state.selection
    }
}
export default connect(mapStateToProps)(Calendar);
