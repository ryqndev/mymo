import 'date-fns';
import {addDays, startOfDay, endOfDay, subMinutes, roundToNearestMinutes} from 'date-fns';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Typography, ButtonBase, InputLabel, FormControl, Input, IconButton } from '@material-ui/core';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import ArrowBack from '@material-ui/icons/ArrowBack';
import './styles/create-screen.css';

const JOIN_CODE = 5;

function generateRoomID( SIZE ) {
    let id = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for ( let i = 0; i < SIZE; i++ ) {
        id += possible.charAt( Math.floor( Math.random() * possible.length ) );
    }
    return id;
}

export class CreateScreen extends Component {
    constructor(props){
        super(props);
        let today = new Date();
        this.state = {
            name: "",
            startDate: startOfDay(today),
            endDate: startOfDay(addDays(today, 7)),
            startTime: startOfDay(today),
            endTime: subMinutes(roundToNearestMinutes(endOfDay(today)), 5),
        };
    }

    generateRoom = () => {
        let metaData = {
            'name': this.state.name,
            'sd': this.state.startDate,
            'ed': this.state.endDate,
            'st': this.state.startTime,
            'et': this.state.endTime,
            'plan': []
        }
        let roomCode =  generateRoomID(JOIN_CODE);
        fetch('https://httprelay.io/mcast/' + roomCode, {
            method: 'POST',
            body: JSON.stringify(metaData)
        }).then(resp => {
            window.location.href = `./${roomCode}`;
        }).catch(resp =>{
            alert("Something went wrong. Try again!\n" + resp);
        });
    }

    handlePlanNameChange = (name) => {
        this.setState({ name: name.target.value });
    };
    handleStartDateChange = (date) => {
        this.setState({ startDate: date });
    };
    handleEndDateChange = (date) => {
        this.setState({ endDate: date });
    };
    handleStartTimeChange = (time) => {
        this.setState({ startTime: time });
    };
    handleEndTimeChange = (time) => {
        this.setState({ endTime: time });
    };

    render() {
        const { startDate, endDate, startTime, endTime } = this.state;
        return (
            <div className="create-holder">
            <Typography variant="h5">Create Plan</Typography>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <div className="component-holder--screen">
                        <FormControl>
                            <InputLabel>Plan Name</InputLabel>
                            <Input onChange={this.handlePlanNameChange} id="room-number"/>
                        </FormControl>
                        <DatePicker onChange={this.handleStartDateChange} 
                                    value={startDate}
                                    disablePast={true}
                                    label="Plan an event from" />
                        <DatePicker onChange={this.handleEndDateChange}
                                    value={endDate}
                                    minDate={startDate}
                                    disablePast={true}
                                    minDateMessage={"End date must be on or after start date"}
                                    label="to"/>
                        <TimePicker onChange={this.handleStartTimeChange}
                                    value={startTime}
                                    minutesStep={5}
                                    label="Between the hours of" />
                        <TimePicker onChange={this.handleEndTimeChange}
                                    value={endTime}
                                    minutesStep={5}
                                    minDate={startTime}
                                    minDateMessage={"End time must be after start time"}
                                    label="and" />
                        <a> {/*eslint-disable-line*/}
                            <ButtonBase className="input" onClick={this.generateRoom}>CREATE</ButtonBase>
                        </a>
                    </div>
                </MuiPickersUtilsProvider>
                <Link to='../'>
                    <IconButton className="icon">
                        <ArrowBack/>
                    </IconButton>
                </Link>
            </div>
        )
    }
}

export default CreateScreen
