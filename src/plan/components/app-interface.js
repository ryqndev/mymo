import React, { Component } from 'react';
import {MemoryRouter, Route} from 'react-router-dom';
import { Card, Modal } from '@material-ui/core';
import ShareModal from './share-modal';
import Calendar from './calendar';
import Edit from './edit';
import View from './view';
import './styles/app-interface.css';

export class AppInterface extends Component {
    constructor(props){
        super(props);
        this.state = {
            share: true,
            room: this.props.match.params.room
        };
    }
    closeShare = () => {
        this.setState(state => ({
            share: !state.share
        }));
    };
    render() {
        return (
            <MemoryRouter>
                <Card className="app-interface">
                    <Modal open={this.state.share} onClick={this.closeShare}>
                        <ShareModal />
                    </Modal>
                    <Route exact strict path='/' component={Calendar} />
                    <Route path='/edit' component={Edit} />
                    <Route path='/view' component={View} />
                </Card>
                
            </MemoryRouter>
        )
    }
}

export default AppInterface
