import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { IconButton } from '@material-ui/core';

function mapStateToProps(state){
    return {
        socials: state.socials
    }
}

export class View extends Component {
    render() {
        return (
            <div>
                {this.props.selection}
                {console.log(this.props.socials)}
                <Link to='/'>
                    <IconButton>
                        <ArrowBack />
                    </IconButton>
                </Link>
            </div>
        )
    }
}

export default connect(mapStateToProps)(View);
