import React from 'react';
import './styles/IconButton.css';

const nothing = () => {
    return;
}

const Button = ({name, icon, onclick=nothing} ) => {
    return (
        <button className="button button--sacnite" onClick={onclick}>
            <img className="button__icon" alt={name} src={icon} />
            <span>{name}</span>
        </button>
    );
}
export const IconButton = ({name, icon, onclick=nothing }) => {
    return (
        <button className="button button--sacnite" onClick={onclick}>
            <img className="button__icon" alt={name} src={icon} />
            <span>{name}</span>
        </button>
    );
}
export const NavigationButton = ({name, icon, onclick=nothing }) => {
    return (
        <button className="button" onClick={onclick}>
            <img className="button__icon" alt={name} src={icon} />
            <span>{name}</span>
        </button>
    );
}
export const TextButton = ({children, label, onclick=nothing }) => {
    return (
        <button className="button-long button--sacnite" aria-label={label} onClick={onclick}>
            <div className="button--text">
                {children}
            </div>
        </button>
    );
}
export default Button;