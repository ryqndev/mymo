import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateUser } from '../../components/actions/socials';
import {MemoryRouter, Route} from 'react-router-dom';
import { Card, Modal } from '@material-ui/core';
import ShareModal from './share-modal';
import Calendar from './calendar';
import Edit from './edit';
import View from './view';
import * as peerConnect from '../../components/peer-communication.js';
import './styles/app-interface.css';

/**
 * TODO  
 * add UUID to local storage in case of browser refresh
 * First check if a value is saved in local storage, otherwise generate key
 * Also, save the plan state to localstorage if it's been accessed before
 */
export class AppInterface extends Component {
    constructor(props){
        super(props);
        this.state = {
            share: true,
            room: this.props.match.params.room,
            uuid: peerConnect.generateSize(10)
        };
        peerConnect.receive( peerConnect.mcast + this.state.room, this.setMetadata);
    }
    setMetadata = (data) => {
        this.setState({
            data: data,
            name: data.name,
            sd: new Date(data.sd),
            ed: new Date(data.ed),
            st: data.st,
            et: data.et
        });
        this.parsePlan(data['plan'], data['recent']);
        peerConnect.receive( peerConnect.mcast + this.state.room, this.setMetadata );
    }
    toggleShare = () => {
        this.setState(state => ({
            share: !state.share,
        }));
    };
    /**
     * TODO  
     * run a check if the redux store is empty - meaning
     * that the user is accessing the plans for the first time
     * so they need to go through every single one
     */
    parsePlan = ( plan, recent ) => {
        // if(false){
        //     plan.forEach(e => {
        //         peerConnect.receive(e,
        //             (data) => {this.props.updateUser({"user": e, "data": data});}
        //         );
        //     });
        // }
        peerConnect.receive( //get other user's schedule
            recent,
            (data) => {
                this.props.updateUser({"user": recent, "data": data});
            }
        );
    }
    sendPlan = ( plan ) => {
        peerConnect.send(
            this.state.uuid,
            JSON.stringify(plan),
            this.updatePlan
        );
    }
    updatePlan = ( resp ) => {
        let tempData = this.state.data;
        if(tempData['plan'].indexOf(this.state.uuid) === -1){
            tempData['plan'].push(this.state.uuid);
        }
        tempData['recent'] = this.state.uuid;
        peerConnect.send(this.state.room, JSON.stringify(tempData));
    }
    render() {
        return (
            <MemoryRouter>
                <Card className="app-interface" >
                    <Modal open={this.state.share} onBackdropClick={this.toggleShare} >
                        <div>
                            <ShareModal />
                        </div>
                    </Modal>
                    <Route exact strict path='/' 
                        render={() => this.state.sd ? 
                                <Calendar 
                                    name={this.state.name}
                                    sendPlan={this.sendPlan}
                                    sd={this.state.sd}
                                    ed={this.state.ed}
                                    st={this.state.st}
                                    et={this.state.et}
                                />
                            : null}/>
                    <Route exact path='/edit' component={Edit} />
                    <Route exact path='/view' component={View} />
                </Card>
            </MemoryRouter>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({updateUser: updateUser}, dispatch);
}
export default connect(null, mapDispatchToProps)(AppInterface);
