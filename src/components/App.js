import React, { Component } from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers/index';
import {HashRouter as Router, Route} from 'react-router-dom';
import Background from './background';
import {AppInterface as EntryAppInterface} from '../entry/components/app-interface';
import AppInterface from '../plan/components/app-interface';

/**
 * REVIEW - remove redux devtools in production
 */
const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
    render() {
        console.log("This is the process.env", process.env.PUBLIC_URL);
        return (
            <Provider store={store}>
                <Background />
                <Router basename={process.env.PUBLIC_URL}>
                    <div>
                        <Route exact strict path='/' component={EntryAppInterface}/>
                        <Route path='/:room' component={AppInterface} />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
