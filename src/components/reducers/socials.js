export default (state={"users": [], "socials": []}, action) => {
    switch(action.type){
        case 'ADD':
            let stateTemp = state;
            stateTemp['users'].push(action.payload);
            return stateTemp;
        default:
            return state;
    }
    // return {
    //     "users": [
    //         {
    //             score: 100,
    //             startTime: '5:00',
    //             endTime: '13:00',
    //             length: '1hr 45mins'
    //         },
    //         {
    //             score: 100,
    //             startTime: '14:00',
    //             endTime: '13:00',
    //             length: '30mins'
    //         },
    //         {
    //             score: 80,
    //             startTime: '5:00',
    //             endTime: '13:00',
    //             length: '2hrs'
    //         }
    //     ],
    //     "socials": [
    //         {
    //             score: 100,
    //             day: '3/17/18',
    //         }
    //     ]
    // };
}
