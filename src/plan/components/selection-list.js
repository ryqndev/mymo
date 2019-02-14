import React, { Component } from 'react';
import {Chip, Paper} from '@material-ui/core';
import './styles/selection-list.css';

export class SelectionList extends Component {
    constructor(props){
        super(props);
        this.state = {
            // chips: this.props.selection
            chips: ["Fri. 2/12", "TU 2/19", "TH 2/19",]
        };
    }
    handleDelete = label => () => {
        this.setState(state => {
            return (state.chips.splice( state.chips.indexOf(label), 1 ))
        });    
    }
    render() {
        return (
            <div>
                <div className="selection-list--title">
                    Selected
                </div>
                <Paper className="selection-list">
                    {this.state.chips.map(data => {
                        return (
                            <Chip
                                label={data}
                                onDelete={this.handleDelete(data)}
                                className="chip"
                            />
                        );
                    })}
                </Paper>
            </div>
        );
    }
}

export default SelectionList;
