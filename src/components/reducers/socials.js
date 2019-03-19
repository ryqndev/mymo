/**
 * @function calculateSocials
 * @summary returns an array of all plans calculated out
 * @param {Array} users 
 * @param {Array} prevSocials 
 */
function calculateSocials(users){
    let socials;
    users.forEach((e, i) => {
        if(i === 0){
            socials = [...e['data']];
        }else{
            socials.forEach((el, i) => { socials[i] += e['data'][i]; });
        }
    });
    return socials; 
}
export default ( state = { "users": [], "socials": []}, action ) => {
    switch(action.type){
        case 'ADD':
            let users;
            let index = state['users'].map((e) => e['user']).indexOf(action.payload['user']);
            if( index === -1){
                users = [...state['users'], action.payload];
            }else{
                users = state['users'];
                users[index]['data'] = action.payload['data'];
            }
            return {
                "users": users,
                "socials": calculateSocials(users)
            };
        default:
            return state;
    }
}