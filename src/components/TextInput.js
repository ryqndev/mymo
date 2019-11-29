import React from 'react';
import './styles/TextInput.scss';

const TextInput = ({id, label, cur, set}) => {

    let filled = cur !== "" ? " filled" : "";

    return (
        <form className={"" + filled}>
            <input
                className=""
                type="text"
                id={id}
                value={cur}
                onChange={e => set(e.target.value)}
            />
            <label className="" htmlFor={id}>
                <span className="">{label}</span>
            </label>
        </form>
    );
}

export default TextInput;