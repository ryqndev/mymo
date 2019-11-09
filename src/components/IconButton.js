import React from 'react';
import './styles/IconButton.css';

const IconButton = ({name, icon, onclick=()=>{return;} }) => {
    return (
        <button className="button button--sacnite" onClick={onclick}>
            <img className="button__icon" alt="Facebook" src={icon} />
            <span>{name}</span>
        </button>
    );
}

export default IconButton;