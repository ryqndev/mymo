import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { IconButton } from '@material-ui/core';


export class Edit extends Component {
    render() {
        return (
            <div>
                {this.props.selection}
                <Link to='/'>
                    <IconButton>
                        <ArrowBack />
                    </IconButton>
                </Link>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        selection: state.selection,
        plan: state.plan
    }
}   
export default connect(mapStateToProps)(Edit);
