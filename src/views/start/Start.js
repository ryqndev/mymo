import React, {useState} from 'react';
import { MemoryRouter as Router, Route, Link} from 'react-router-dom';
import TextInput from '../../components/TextInput';
import IconButton from '../../components/IconButton';
import FacebookIcon from '../../assets/social-icons/facebook.svg';
import GmailIcon from '../../assets/social-icons/gmail.svg';
import Back from '../../assets/back.svg';
import Forward from '../../assets/forward.svg';
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
const Login = () => {
    return (
        <div className="start-form--wrapper">
            <span>Login with:</span>
            <div className="start-button--wrapper">
                <IconButton name="Facebook" icon={FacebookIcon} />
                <IconButton name="Gmail" icon={GmailIcon} />
            </div>
            <span> - or -</span>
            <div className="start-anonymous--padding">
                <Link to='/user'>
                    <div className="button-long button--sacnite">
                        <div className="button--text">
                            Sign in as Guest
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}
const User = () => {
    const [displayName, setDisplayName] = useState("");
    return (
        <div className="start-form--wrapper">
            <TextInput id="user-display" label="Display Name" cur={displayName} set={setDisplayName} />
            <div>
                <div>
                    <Link to='/'>
                        <IconButton name="Back" icon={Back} />
                    </Link>
                </div>
                <div className={displayName.length ? "show" : "hide"}>
                    <Link to='/'>
                        <IconButton name="Forward" icon={Forward} />
                    </Link>
                </div>
            </div>
        </div>
    );
}


export default Start;