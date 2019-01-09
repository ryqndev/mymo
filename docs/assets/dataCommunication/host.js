/**
 * @author Ryan Yang
 * test link: file:///Users/ryanyang/Desktop/Workspace/planmysocial/docs/assets/testComm/host.html?sd=10/24/2018&ed=10/30/2018
 */

let metaData;
/** @todo: use these for production DO NOT FORGET TO SEPARATE PARAMS */
let ROOM_ID = '1t78pQ0KDx';
let MCAST_ID = 'GeuI1OKHbR'
// let ROOM_ID = generateRoomID(ID_SIZE);
// let MCAST_ID = generateRoomID(ID_SIZE);

// let MCAST_URL = httpRelayMCast + MCAST_ID;

let users = [];

function load() {
    parseURL();
    setupPlan();
}

function setupPlan() {
    sd = new Date(params.get("sd").substr(6,4), params.get("sd").substr(0,2) - 1, params.get("sd").substr(3,2));
    ed = new Date(params.get("ed").substr(6,4), params.get("ed").substr(0,2) - 1, params.get("ed").substr(3,2));
    et = params.get("et");
    //get info
    // populatePlan();
    createRoom();
}

function createRoom() {
    metaData = {
        'sd': sd,
        'ed': ed,
        'st': st,
        'et': et,
        'ai': null
    };
    openConnection();
}

function openConnection() {
    const ROOM_URL = httpRelayLink + ROOM_ID;
    let newCode = generateRoomID( ID_SIZE );
    users.push( newCode );
    let data = {
        'code': newCode,
        'mcast': MCAST_ID,
        'data': metaData
    };
    display(users);
    postReq( ROOM_URL, JSON.stringify( data ), joined );
}

function closeConnection() {
    const ROOM_URL = httpRelayLink + users[ users.length - 1 ];
    getReq( ROOM_URL, nothing );
    users.pop();
}

function joined() {
    let lastJoined = users[ users.length - 1 ];
    getReq( httpRelayLink + lastJoined, getClientSchedule );
    openConnection();
}

function getClientSchedule( data ) {
    addPlan( data );
}

function updateMCAST( MCASTData ) {
    users.forEach( ( e ) => {
        postReq( httpRelayLink + e, MCAST_ID, getVote );
    } );
}

function getVote( vote ) {

}

function nothing() {
    return 0;
}

function parseURL() {
    let urlParams = new URLSearchParams( window.location.search );
    startD = urlParams.get( 'sd' );
    endD = urlParams.get( 'ed' );
}