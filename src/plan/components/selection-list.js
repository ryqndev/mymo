import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { deleteSelection } from '../../components/actions/selection';
import {Chip, Paper} from '@material-ui/core';
import './styles/selection-list.css';

function mapStateToProps(state){
    return {
        selection: state.selection
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({deleteSelection: deleteSelection}, dispatch);
}

export class SelectionList extends Component {
    handleDelete = (key) => {
        this.props.deleteSelection(key);
    }
    
    render() {
        return (
            <div>
                <div className="selection-list--title">
                    Selected
                </div>
                <Paper className="selection-list">
                    {this.props.selection.map(data => {
                        return (
                            <Chip 
                                key={data['key']}
                                label={data['title']}
                                onDelete={() => this.handleDelete(data['key'])}
                                className="chip"
                            />
                        );
                    })}
                </Paper>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectionList);
