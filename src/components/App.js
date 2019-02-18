import React, { Component } from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers/index';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Background from './background';
import {AppInterface as EntryAppInterface} from '../entry/components/app-interface';
import {AppInterface as PlanAppInterface} from '../plan/components/app-interface';

const store = createStore(allReducers);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Background />
                <Router>
                    <div>
                        <Route exact strict path='/' component={EntryAppInterface}/>
                        <Route path='/:room' component={PlanAppInterface} />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
