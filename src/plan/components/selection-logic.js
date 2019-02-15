import { Component } from 'react';

export class SelectionLogic extends Component {
    state = {
        selection: this.props.selection
    }
    finc = setInterval(() => {
        this.props.cb(this.state.selection);
    }, 5000);
    render() {
        return false;
    }
}

export default SelectionLogic
