import React, {useState} from 'react';
import { MemoryRouter as Router, Route, Link} from 'react-router-dom';
import PlanSetup from './PlanSetup';
import Info from './Info';
import TextInput from '../../components/TextInput';
import Button, {IconButton} from '../../components/Button';
import FacebookIcon from '../../assets/social-icons/facebook.svg';
import GmailIcon from '../../assets/social-icons/gmail.svg';
import Back from '../../assets/back.svg';
import Forward from '../../assets/forward.svg';
import './styles/Start.css';

const Start = () => {
    const [name, setName] = useState('');
    const [plan, setPlan] = useState({
        'planname': '',
        'startDate': '',
        'endDate': '',
        'startTime': '',
        'endTime': '',
    });

    return (
        <div className="start-wrapper">
            <div className="start-info--wrapper">
                <div className="start-info--title">
                    M Y M O
                </div>
                <Info />
            </div>
            <Router initialEntries={[ '/', '/user', '/plan' ]} initialIndex={1}>
                <div className="start-form--wrapper">
                    <Route exact stric path='/' component={Login} />
                    <Route path='/user' render={() => <User name={name} setName={setName} />} /> 
                    <Route path='/plan' render={() => <PlanSetup plan={plan} setPlan={setPlan} />} />
                </div>
            </Router>
        </div>
    );
}

const Login = () => {
    return (
        <div className="start--user">
            <span>Login with:</span>
            <div className="start-button--wrapper">
                <IconButton name="Facebook" icon={FacebookIcon} />
                <IconButton name="Gmail" icon={GmailIcon} />
            </div>
            <span> - or - </span>
            <div className="start-anonymous--padding">
                <Link to='/user'>
                    <Button>
                        Sign in as Guest
                    </Button>
                </Link>
            </div>
        </div>
    );
}
const User = ({name, setName}) => {
    return (
        <div className="start--user">
            <TextInput id="user-display" label="Display Name" cur={name} set={setName} />
            <div className="start-form-user--navigation">
                <Link to='/'>
                    <IconButton name="Back" icon={Back} />
                </Link>
                <div className={name.length ? "show" : "hide"}>
                    <Link to='/plan'>
                        <IconButton name="Forward" icon={Forward} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Start;