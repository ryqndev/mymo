import React, {useState} from 'react';
import {Link, Route} from 'react-router-dom';
import TextInput from '../../components/TextInput';
import {IconButton} from '../../components/Button';
import Back from '../../assets/back.svg';
import Forward from '../../assets/forward.svg';
import './styles/PlanSetup.css';

const PlanSetup = ({plan, setPlan}) => {
    let [complete] = useState(true);
    let [pn, setpn] = useState(plan.planname);
    let [sd, setsd] = useState(plan.startdate);
    let [ed, seted] = useState(plan.enddate);
    let [st, setst] = useState(plan.starttime);
    let [et, setet] = useState(plan.endtime);
    let setValue = (key, val) => {
        setPlan({
            ...plan,
            key: val
        });
    }

    return (
        <div className="start--plan">
            <TextInput id="pname" label="Plan Name" cur={pn} set={setpn} />
            <TextInput id="sdate" label="Start Date" cur={sd} set={setsd} />
            <TextInput id="edate" label="End Date" cur={ed} set={seted} />
            <TextInput id="stime" label="Start Time" cur={st} set={setst} />
            <TextInput id="etime" label="End Time" cur={et} set={setet} />
            <div className="plan-setup--navigation">
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