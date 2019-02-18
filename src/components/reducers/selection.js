export default (state=[], action) => {
    switch(action.type){
        case 'UPDATE':
            return action.payload;
        case 'DELETE':
            let stateTemp = state;
            stateTemp.splice(state.findIndex(e => { return e['key'] === action.payload }), 1);
            return stateTemp;
        default:
            return state;
    }
}