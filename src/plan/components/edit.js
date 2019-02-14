import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { IconButton } from '@material-ui/core';

export class Edit extends Component {
    render() {
        return (
        <div>
            <Link to='/'>
                <IconButton>
                    <ArrowBack />
                </IconButton>
            </Link>
        </div>
        )
    }
}

export default Edit;
