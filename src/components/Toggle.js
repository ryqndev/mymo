import React from 'react';
import Toggle from 'react-toggle';
import './styles/Toggle.css';

const toggle = ({cur, set}) => {
    return (
        <label>
            <Toggle
                checked={cur}
                icons={false}
                onChange={set.bind(null, !cur)}
            />
        </label>
    );
}

export default toggle;