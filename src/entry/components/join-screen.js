import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Typography, ButtonBase, InputLabel, FormControl, Input, IconButton } from '@material-ui/core';
import ArrowBack from '@material-ui/icons/ArrowBack'
import './styles/start-screen.css';

const JOIN_CODE = 5;

export class JoinScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            link: ''
        }
    }
    handlePlanLinkChange = (link) => {
        this.setState({ link: link.target.value });
    };
    enterRoom = () => {
        let urlLen = this.state.link.length;
        let roomCode = this.state.link.substr(urlLen - JOIN_CODE, JOIN_CODE);
        window.location.href = './' + roomCode;
    };

    render() {
        return (
            <div>
                <div className="logo"></div>
                <Typography variant="h4">Plan My Social</Typography>
                <div className="component-holder">
                    <FormControl>
                        <InputLabel>Plan Link</InputLabel>
                        <Input onChange={this.handlePlanLinkChange} id="room-number"/>
                    </FormControl>
                    <a> {/*eslint-disable-line*/}
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
