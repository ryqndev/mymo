import React, {useState} from 'react';
import {Link, Route} from 'react-router-dom';
import TextInput from '../../components/TextInput';
import {IconButton} from '../../components/Button';
import Back from '../../assets/back.svg';
import Forward from '../../assets/forward.svg';

const PlanSetup = ({plan, setPlan}) => {
    let [complete] = useState(true);
    let setValue = (key, val) => {
        setPlan({
            ...plan,
            key: val
        });
    }

    return (
        <div className="start--user">
            <TextInput id="planname" label="Plan Name" cur={plan} set={setValue.bind(null, 'planname')} />
            <div className="start-form-user--navigation">
                <div>
                    <Link to='/'>
                        <IconButton name="Back" icon={Back} />
                    </Link>
                </div>
                <div className={complete ? "show" : "hide"}>
                    <Link to='/'>
                        <IconButton name="Forward" icon={Forward} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default PlanSetup;