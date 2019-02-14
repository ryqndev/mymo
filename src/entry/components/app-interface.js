import React, { Component } from 'react';
import { MemoryRouter as Router, Route} from 'react-router-dom';
import { Card } from '@material-ui/core';
import StartScreen from './start-screen';
import JoinScreen from './join-screen';
import CreateScreen from './create-screen';
import './styles/app-interface.css';

export class AppInterface extends Component {
    render() {
        return (
            <Router>
                <Card className="app-interface">
                    <Route exact path="/" component={StartScreen}/>
                    <Route path="/join" component={JoinScreen}/>
                    <Route path="/create" component={CreateScreen}/>
                </Card>
            </Router>
        )
    }
}

export default AppInterface
