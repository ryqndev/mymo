import React, {useState} from 'react';
import './styles/TextInput.css';

const TextInput = ({id, label}) => {
    const [text, setText] = useState('');

    let filled = text !== "" ? " input--filled" : "";

    return (
        <span className={"input input--ruri" + filled}>
            <input
                className="input__field input__field--ruri"
                type="text"
                id={id}
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <label
                className="input__label input__label--ruri"
                htmlFor={id}
            >
                <span className="input__label-content input__label-content--ruri">
                    {label}
                </span>
            </label>
        </span>
    );
}

export default TextInput;