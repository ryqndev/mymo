import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Typography, ButtonBase, InputLabel, FormControl, Input, IconButton } from '@material-ui/core';
import ArrowBack from '@material-ui/icons/ArrowBack'
import './styles/start-screen.css';

const JOIN_CODE = 5;

export class JoinScreen extends Component {
    enterRoom = () => {
        let roomURL = document.getElementById('room-number').value;
        let urlLen = roomURL.length;
        let roomCode = roomURL.substr(urlLen - JOIN_CODE, JOIN_CODE);
        window.location.href = './' + roomCode;
        // this.props.history.push('/' + roomCode)
    };

    render() {
        return (
            <div>
                <div className="logo"></div>
                <Typography variant="h4">Plan My Social</Typography>
                <div className="component-holder">
                    <FormControl>
                        <InputLabel>Plan Link</InputLabel>
                        <Input id="room-number"/>
                    </FormControl>
                    <a>
                        <ButtonBase className="input" onClick={this.enterRoom}>JOIN</ButtonBase>
                    </a>
                </div>
                <Link to='./'>
                    <IconButton className="icon">
                        <ArrowBack/>
                    </IconButton>
                </Link>
            </div>
        )
    }
}

export default JoinScreen
