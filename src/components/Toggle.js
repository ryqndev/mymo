import React from 'react';
import Toggle from 'react-toggle';
import './styles/Toggle.css';

const toggle = ({cur, set}) => {
    let toggle = () => {
        set(!cur);
    }
    return (
        <label>
            <Toggle
                checked={cur}
                icons={false}
                onChange={toggle}
            />
        </label>
    );
}

export default toggle;