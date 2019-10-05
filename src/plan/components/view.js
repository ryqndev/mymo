import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { IconButton } from '@material-ui/core';
import ViewExpansionPanel from './view-expansion-panel';
import './styles/view.css';

export class View extends Component {
    render() {
        return (
            <div>
                <div id="view-socials">
                    {this.props.socials['socials'].map((e, i) => {
                        return (<ViewExpansionPanel key={i} data={e}/>);
                    })}
                </div>
                <div className="view-back">
                    <Link to='/'>
                        <IconButton>
                            <ArrowBack />
                        </IconButton>
                    </Link>
                </div>
            </div>
        )
    }
}

export default View;
