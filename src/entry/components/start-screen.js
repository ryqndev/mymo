import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Typography, ButtonBase } from '@material-ui/core';
import './styles/start-screen.css';

export class StartScreen extends Component {
    render() {
        return (
        <div>
            <div className="logo"></div>
            <Typography variant="h4">Plan My Social</Typography>
            <div className="component-holder">
                <Link to="/join">
                    <ButtonBase className="input">JOIN PLAN</ButtonBase>
                </Link>
                <Link to="/create">
                    <ButtonBase className="input">CREATE PLAN</ButtonBase>
                </Link>
            </div>
        </div>
        )
    }
}

export default StartScreen
