export default (state = { "users": [], "socials": []}, action) => {
    switch(action.type){
        case 'ADD':
            let stateTemp = state;
            stateTemp['users'].push(action.payload);
            return stateTemp;
        default:
            return state;
    }
}
