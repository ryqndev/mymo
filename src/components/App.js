import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import {AppInterface as EntryAppInterface} from '../entry/components/app-interface';
import {AppInterface as PlanAppInterface} from '../plan/components/app-interface';
import './styles/background.css';

class App extends Component {
    render() {
        return (
            <div className="background">
                <Router basename={process.env.PUBLIC_URL}>
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
