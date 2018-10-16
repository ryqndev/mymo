let start;
let end;

//      file:///Users/ryanyang/Desktop/Workspace/ScheduleMe/docs/assets/testComm/host.html?sd=10/24/2018&ed=10/30/2018

let ROOM_ID_1 = '1t78pQ0KDx';
let ROOM_ID_2 = 'GeuI1OKHbR';
const LINK_URL_1 = 'https://httprelay.io/link/1t78pQ0KDx';
const LINK_URL_2 = 'https://httprelay.io/link/GeuI1OKHbR';

/** @todo: use these for production DO NOT FORGET TO SEPARATE PARAMS*/
// const ROOM_ID_ALL = generateRoomID();
// const LINK_URL = httpRelayBaseUrl + ROOM_ID;
let data = {
    'total': 1
};


function load(){ 
    parseURL();
    createRoom();
}
function createRoom(){
    postReq();
}
function joined(){

}



function parseURL() {
    let urlParams = new URLSearchParams(window.location.search);
    start = urlParams.get('sd');
    end = urlParams.get('ed');

    /** @todo: remove display */
    display(`start : ${start} \n\n end: ${end}`);
}
function generateRoomID(){
    let id = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < ID_SIZE; i++){
        id += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return id;
}