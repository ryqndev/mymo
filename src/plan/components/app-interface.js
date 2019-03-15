import React, { Component } from 'react';
import {MemoryRouter, Route} from 'react-router-dom';
import { Card, Modal } from '@material-ui/core';
import ShareModal from './share-modal';
import Calendar from './calendar';
import Edit from './edit';
import View from './view';
import './styles/app-interface.css';

const httpRelayMCast = 'https://httprelay.io/mcast/';
function generateRoomID( SIZE ) {
    let id = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for ( let i = 0; i < SIZE; i++ ) {
        id += possible.charAt( Math.floor( Math.random() * possible.length ) );
    }
    return id;
}

function getReq( link, callback ) {
    fetch(link)
    .then(resp => {
        return resp.json();
    }).then(resp => {
        callback(resp);
    })
    .catch(err => {
        alert("An error occured: " + err);
    })
}

/**
 * FIXME 
 * add UUID to local storage in case of browser refresh
 * First check if a value is saved in local storage, otherwise generate
 */
export class AppInterface extends Component {
    constructor(props){
        super(props);
        this.state = {
            share: true,
            room: this.props.match.params.room,
            uuid: generateRoomID(10)
        };
        getReq( httpRelayMCast + this.state.room, this.setMetadata);
    }
    setMetadata = (data) => {
        this.setState({
            data: data,
            name: data.name,
            sd: new Date(data.sd),
            ed: new Date(data.ed),
            st: data.st,
            et: data.et,
        });
        this.parsePlan(data.plan);
        // getReq( httpRelayMCast + this.state.room, this.setMetadata );
    }
    closeShare = () => {
        this.setState(state => ({
            share: !state.share,
        }));
    };
    parsePlan = ( plan ) => {
        console.log("\nplan is:", plan, "\n");
    }
    sendPlan = ( plan ) => {
        //update own page
        fetch(httpRelayMCast + this.state.uuid, {
            method: 'POST',
            body: JSON.stringify(this.props.selection)
        }).then(resp => {
            //update main page
            fetch(httpRelayMCast + this.state.room, {
                method: 'POST',
                body: JSON.stringify(this.props.selection)
            }).then(resp => {
                console.log("For debugging purposes: ", this.props.selection, " was sent!", resp);
            }).catch(resp =>{
                alert("Something went wrong. Try again!\n" + resp);
            });
        }).catch(resp =>{
            alert("Something went wrong. Try again!\n" + resp);
        });
    }
    render() {
        return (
            <MemoryRouter>
                <Card className="app-interface" >
                    <Modal open={this.state.share} onBackdropClick={this.closeShare} >
                        <div>
                            <ShareModal />
                        </div>
                    </Modal>
                    <Route exact strict path='/' 
                        render={() => this.state.sd ? <Calendar 
                                                name={this.state.name}
                                                sendPlan={this.sendPlan}
                                                sd={this.state.sd}
                                                ed={this.state.ed}
                                                st={this.state.st}
                                                et={this.state.et}/>
                                : null}/>
                    <Route exact path='/edit' component={Edit} />
                    <Route exact path='/view' component={View} />
                </Card>
            </MemoryRouter>
        )
    }
}
export default AppInterface;
