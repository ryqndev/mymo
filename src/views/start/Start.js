import React from 'react';
import { MemoryRouter as Router, Route, Link} from 'react-router-dom';
import TextInput from '../../components/TextInput';
import './styles/Start.css';

const Start = () => {
    return (
        <div className="start-wrapper">
            <div className="start-info--wrapper">
                <div className="start-info--title">
                    M Y M O
                </div>
            </div>

                <Router initialEntries={[ '/', '/user', '/plan' ]} initialIndex={1}>
                    <Route exact stric path='/' component={Login} />
                    <Route path='/user' component={User} />
                    <Route path='/plan' component={Login} />
                </Router>

        </div>
    );
}
const User = () => {
    return (
        <div className="start-form--wrapper">
            <TextInput id="user-display" label="Display Name"/>
            <Link to='/'>
                <div className="btn">
                    BACK IT UP
                </div>
            </Link>
        </div>
    );
}
const Login = () => {
    return (
        <div className="start-form--wrapper">
            <span>Login with:</span>
            <div className="start-button--wrapper">
                <div className="btn">
                    Facebook
                </div>
                <div className="btn">
                    Gmail
                </div>
            </div>
            <span> - or -</span>
            <Link to='/user'>
                <div className="btn">
                    Sign in as Guest
                </div>
            </Link>
        </div>
    );
}

export default Start;