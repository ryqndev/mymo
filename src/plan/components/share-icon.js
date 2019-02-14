import React, { Component } from 'react';
import './styles/share-icon.css';

export class ShareIcon extends Component {
    render() {
        return (
            <a href={this.props.linkTo} rel="noopener noreferrer" target="_blank">
                <img src={this.props.iconFile} alt={this.props.alt} />
            </a>
        )
    }
}

export default ShareIcon
