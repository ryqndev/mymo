import React from 'react';
import './styles/Button.scss';

const nothing = () => { return; }

const spanify = ( text ) => {
    let spanned = [];
    for (let i = 0; i < text.length; i++) {
        spanned.push( <span key={i}>{text.charAt(i)}</span>);
    }
    return spanned;
}

const Button = ({name, children, icon, onclick=nothing} ) => {
    return (
        <button className="button long">
            <div className="button-content">
                <div className="button-text long">
                    {spanify(children)}
                </div>
            </div>
        </button>
    );
}
export const IconButton = ({name, icon, onclick=nothing} ) => {
    return (
        <button className="button short"  onClick={onclick}>
            <div className="button-content">
                <div className="button-text long">
                    <img className="button--icon" alt={name} src={icon} />
                </div>
            </div>
        </button>
    );
}

export default Button;