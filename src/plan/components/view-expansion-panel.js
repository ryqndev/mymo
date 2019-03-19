import React, { Component } from 'react';
import {ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export class ViewExpansionPanel extends Component {
    render() {
        return (
        <div>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    HALLO
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    GOOBYE
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>    
        )
    }
}

export default ViewExpansionPanel
