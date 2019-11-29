import React from 'react';
import { useHistory } from "react-router-dom";

const Link = ( {delay = 0, to} ) => {
    let history = useHistory();

    let redirect = () => {
        
        history.push(to);
    }
    return (
        <button onClick={redirect}>
        </button>
    );
}

export default Link;