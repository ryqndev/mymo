import React, { Component } from 'react';
import ShareIcon from './share-icon';
import GmailIcon from '../../assets/icons/gmail.jpg';
import FBIcon from '../../assets/icons/facebook.jpg';
import GPLusIcon from '../../assets/icons/google.plus.jpg';
import TwtrIcon from '../../assets/icons/twitter.jpg';
import './styles/share-modal.css';

export class ShareModal extends Component {
    state = {
        link: window.location.href
    }
    render() {
        return (
            <div className="share">
                <div className="share-plan--header">
                    INVITE YOUR FRIENDS
                </div>
                <div className="share--content">
                    Send this link to your friends
                    <br />
                    <div id="share-urls">
                        <div className="copy-link">{this.state.link}</div>
                        Share your plan with your friends on social media
                        <div>
                            <ShareIcon linkTo={`mailto:?Subject=Join My Plan&amp;Body=Join My Plan! ${this.state.link}`}
                                       iconFile={GmailIcon} alt="Email"/>
                            <ShareIcon linkTo={`http://www.facebook.com/sharer.php?u=${this.state.link}`}
                                       iconFile={FBIcon} alt="Facebook"/>
                            <ShareIcon linkTo={`https://plus.google.com/share?url=${this.state.link}`}
                                       iconFile={GPLusIcon} alt="Google"/>
                            <ShareIcon linkTo={`https://twitter.com/share?url=${this.state.link}&amp;text=Join My Plan&amp;hashtags=planmysocial`}
                                       iconFile={TwtrIcon} alt="Twitter"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ShareModal;
