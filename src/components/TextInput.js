import React, {useState} from 'react';
import './styles/TextInput.css';

const TextInput = ({id, label}) => {
    const [text, setText] = useState('');

    let filled = text !== "" ? " input--filled" : "";

    return (
        <span className={"input input--jiro" + filled}>
            <input className="input__field input__field--jiro"
                type="text"
                id={id}
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <label className="input__label input__label--jiro" htmlFor={id}>
                <span className="input__label-content input__label-content--jiro">{label}</span>
            </label>
        </span>
    );
}

export default TextInput;