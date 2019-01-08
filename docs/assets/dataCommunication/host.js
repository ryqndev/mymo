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
    startT = 36; //# of 15 minute segments since 12 am
    endT = 88;
    //get info
    numD = Math.floor( ( new Date( endD ) - new Date( startD ) ) / 86400000 );
    numT = endT - startT;
    populatePlan();
    createRoom();
}

function createRoom() {
    metaData = {
        'startDate': startD,
        'endDate': endD,
        'startTime': startT,
        'endTime': endT,
        'numDate': numD,
        'numTime': numT
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
    postReq( ROOM_URL, JSON.stringify( data ), joined );
}

function closeConnection() {
    const ROOM_URL = httpRelayLink + users[ users.length - 1 ];
    getReq( ROOM_URL, nothing );
    users.pop();
}

function joined() {
    let lastJoined = users[ users.length - 1 ];
    console.log("someone joined!!");
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

function generateRoomID( SIZE ) {
    let id = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for ( let i = 0; i < SIZE; i++ ) {
        id += possible.charAt( Math.floor( Math.random() * possible.length ) );
    }
    return id;
}