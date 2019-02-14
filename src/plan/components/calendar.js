import React, { Component } from 'react';
import {addDays} from 'date-fns';
import {Link} from 'react-router-dom';
import {IconButton, ButtonBase} from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Edit from '@material-ui/icons/Edit';
import CalendarContent from './calendar-content';
import SelectionList from './selection-list';
import './styles/calendar.css';
import './styles/calendar-options.css';

let sd = addDays(new Date(), 1);
let ed = addDays(sd, 7);
const monthNamesLong = [' January', ' February', ' March', ' April', ' May', ' June', ' July', ' August', ' September', ' October', ' November', ' December'];

export class Calendar extends Component {
    constructor(props){
        super(props);
        this.state = {
            vMonth: 1,
            vYear: 2019,
            sDate: sd,
            eDate: ed,
            selected: []
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
    render() {
        return (
            <div>
                <div className="calendar-title">
                    <IconButton onClick={this.prevMonth}>
                        <KeyboardArrowLeft />
                    </IconButton>
                    <div id="calendar-title--text">
                        {monthNamesLong[this.state.vMonth]}, <span>{this.state.vYear}</span>
                    </div>
                    <IconButton onClick={this.nextMonth}>
                        <KeyboardArrowRight />
                    </IconButton>
                </div>
                <CalendarContent month={this.state.vMonth} year={this.state.vYear} start={this.state.sDate} end={this.state.eDate}/>
                <SelectionList selection={this.state.selected} />
                <div className="buttons">
                    <Link to='/edit'>
                        <IconButton>
                            <Edit />
                        </IconButton>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Calendar;
