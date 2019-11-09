import React from 'react';
import './styles/TextInput.css';

const TextInput = ({id, label, cur, set}) => {

    let filled = cur !== "" ? " input--filled" : "";

    return (
        <span className={"input input--jiro" + filled}>
            <input className="input__field input__field--jiro"
                type="text"
                id={id}
                value={cur}
                onChange={e => set(e.target.value)}
            />
            <label className="input__label input__label--jiro" htmlFor={id}>
                <span className="input__label-content input__label-content--jiro">{label}</span>
            </label>
        </span>
    );
}

export default TextInput;