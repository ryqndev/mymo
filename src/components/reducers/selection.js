export default (state=[], action) => {
    switch(action.type){
        case 'UPDATE':
            return action.payload;
        case 'DELETE':
            let stateTemp = state.filter(e => e['key'] !== action.payload);
            return stateTemp;
        case 'GET':
            return state;
        default:
            return state;
    }
}