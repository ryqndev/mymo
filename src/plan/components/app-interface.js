import React, { Component } from 'react';
import {MemoryRouter, Route} from 'react-router-dom';
import { Card, Modal } from '@material-ui/core';
import ShareModal from './share-modal';
import Calendar from './calendar';
import Edit from './edit';
import View from './view';
import './styles/app-interface.css';

// const httpRelayLink  = 'https://httprelay.io/link/';
const httpRelayMCast = 'https://httprelay.io/mcast/';

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
// function postReq( link, message, callback ) {
//     console.log(link, message);
//     fetch(link, {
//         method: 'POST',
//         body: JSON.stringify(message)
//     }).then(resp => {
//         callback(resp.json())
//     }).catch(err =>{
//         alert("An error occured: " + err);
//     });
// }
export class AppInterface extends Component {
    constructor(props){
        super(props);
        this.state = {
            share: true,
            room: this.props.match.params.room
        };
        getReq( httpRelayMCast + this.state.room, this.setMetadata);
    }
    setMetadata = (data) => {
        this.setState({
            name: data.name,
            sd: new Date(data.sd),
            ed: new Date(data.ed),
            st: data.st,
            et: data.et,
        });
    }
    closeShare = () => {
        this.setState(state => ({
            share: !state.share,
        }));
    };
    getSelection = (selection) => {
        this.setState({
            selection: selection
        })
    }
    render() {
        return (
            <MemoryRouter>
                <Card className="app-interface" onClick={this.test}>
                    <Modal open={this.state.share} onClick={this.closeShare}>
                        <div>
                            <ShareModal />
                        </div>
                    </Modal>
                    <Route exact strict path='/' 
                        render={() => this.state.sd ? <Calendar name={this.state.name}
                                                sd={this.state.sd}
                                                ed={this.state.ed}
                                                st={this.state.st}
                                                et={this.state.et}
                                                selection={this.getSelection}/>
                                : null}/>
                    <Route path='/edit' component={Edit} />
                    <Route path='/view' component={View} />
                </Card>
            </MemoryRouter>
        )
    }
}
export default AppInterface
