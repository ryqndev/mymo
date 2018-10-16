// file:///Users/ryanyang/Desktop/Workspace/ScheduleMe/docs/assets/testComm/client.html?id=1t78pQ0KDxGeuI1OKHbR
// file:///Users/ryanyang/Desktop/Workspace/ScheduleMe/docs/assets/testComm/client.html?id=1t78pQ0KDxGeuI1OKHbR

/**
 * @todo implement previous submission
 */

let ROOM_ID;
let HOST_ID;
let MCAST_ID;
let ROOM_CONNECTION_CODE;

function load(){
    parseURL();
    connectWithHost();
}
function parseURL() {
    ROOM_ID = (new URLSearchParams(window.location.search)).get('id');
    display(`The current http relay code is: ${ROOM_ID}`);
}
function connectWithHost(){
    const ROOM_URL = httpRelayLink + ROOM_ID;
    getReq(ROOM_URL, connected);
}
function connected(data){
    HOST_ID = data['code'];
    MCAST_ID = data['mcast'];
    console.log(data);
}


function sendDataToHost(data){
    const HOST_URL = httpRelayLink + HOST_ID;
    postReq(HOST_ID, data, waitForOthers);
}
function waitForOthers(){
    const HOST_URL = httpRelayLink + HOST_ID;
    getReq(HOST_ID, getFinal);
}
function getFinal(){
    const MCAST_URL = httpRelayMCast + MCAST_ID;
    getReq(MCAST_URL, getPlans);
}
function getPlans(plans){
    //parse plans
}

let schema = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];