import React from 'react';
import './styles/TextInput.scss';

const TextInput = ({id, label, cur, set}) => {

    let filled = cur !== "" ? " filled" : "";

    const spanify = ( text ) => {
        let spanned = [];
        for (let i = 0; i < text.length; i++) {
            spanned.push( <span key={i}>{text.charAt(i)}</span>);
        }
        return spanned;
    }

    return (
        <form className="form">
            <input
                className={"input" + filled}
                type="text"
                id={id}
                value={cur}
                onChange={e => set(e.target.value)}
            />
            <label className="label" htmlFor={id} data-content={label}>
                {spanify(label)}
            </label>
        </form>
    );
}

export default TextInput;