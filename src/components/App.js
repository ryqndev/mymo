import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Background from './background';
import {AppInterface as EntryAppInterface} from '../entry/components/app-interface';
import {AppInterface as PlanAppInterface} from '../plan/components/app-interface';
import './styles/App.css';


class App extends Component {
    render() {
        return (
            <div>
                <Background />
                <Router>
                    <div>
                        <Route exact strict path='/' component={EntryAppInterface}/>
                        <Route path='/:room' component={PlanAppInterface} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
