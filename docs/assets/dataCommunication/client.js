const LINK_URL_1 = 'https://httprelay.io/link/1t78pQ0KDx';
const LINK_URL_2 = 'https://httprelay.io/link/GeuI1OKHbR';
// file:///Users/ryanyang/Desktop/Workspace/ScheduleMe/docs/assets/testComm/client.html?id=1t78pQ0KDxGeuI1OKHbR

let roomID;

function load(){
    // createConnection();
    parseURL();
}
function parseURL() {
    roomID = (new URLSearchParams(window.location.search)).get('id');
    display(`The current http relay code is: ${roomID}`);
}