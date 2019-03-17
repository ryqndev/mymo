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
        this.parsePlan(data.plan);
        peerConnect.receive( peerConnect.mcast + this.state.room, this.setMetadata );
    }
    toggleShare = () => {
        this.setState(state => ({
            share: !state.share,
        }));
    };
    /**
     * TODO  
     * complete plan
     */
    parsePlan = ( plan ) => {
        let allUniqueUsers = Object.keys(plan);
        let updateUser = allUniqueUsers[0];

        console.log("\nPlan is:", plan, "\nUser List: ", allUniqueUsers);
        peerConnect.receive(
            updateUser,
            (data) => {
                data['user'] = updateUser;
                this.props.updateUser(data);
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
        let update_data = this.state.data;
        let user_plans = Object.keys(update_data['plan']);
        if(user_plans.indexOf(this.state.uuid) === -1){
            update_data['plan'][this.state.uuid] = 0;
        }else{
            update_data['plan'][this.state.uuid] += 1;
        }
        peerConnect.send(this.state.room, JSON.stringify(update_data));
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
