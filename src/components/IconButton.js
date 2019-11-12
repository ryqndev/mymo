import React from 'react';
import './styles/IconButton.css';

const nothing = () => {
    return;
}

const IconButton = ({name, icon, onclick=()=>{return;} }) => {
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
export default IconButton;