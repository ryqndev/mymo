import React from 'react';
import Toggle from 'react-toggle';
import './styles/Toggle.css';

const toggle = () => {
    return (
        <label>
            <Toggle
                defaultChecked={true}
                icons={false}
                />
        </label>
    );
}

export default toggle;