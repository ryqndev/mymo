const ID_SIZE = 20;
const httpRelayBaseUrl = 'https://httprelay.io/mcast/';

/** @todo: use these for production */
// const ROOM_ID = generateRoomID();
// const LINK_URL = httpRelayBaseUrl + ROOM_ID;

const ROOM_ID = '1t78pQ0KDxGeuI1OKHbR';
const LINK_URL = 'https://httprelay.io/mcast/1t78pQ0KDxGeuI1OKHbR';

const QR_COLOR = '506070';
const QR_BGCOLOR = 'D8FBD8';
// const QR_COLOR = '000000';
// const QR_BGCOLOR = 'FFFFFF';
const QR_SIZE = '300x300';
const QR_FORMAT = 'svg';

const  qrCodeBaseUrl
    = 'https://api.qrserver.com/v1/create-qr-code/'
    + '?size='      + QR_SIZE
    + '&format='    + QR_FORMAT
    + '&color='     + QR_COLOR
    + '&bgcolor='   + QR_BGCOLOR
    + '&data=';

function generateRoomID(){
    let roomID = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < ID_SIZE; i++){
        roomID += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return roomID;
}
function load(){
    console.log(LINK_URL);
    // createCalendar();
    createConnection();
}
function generateQRCode(){
    document.getElementById('qr').src = qrCodeBaseUrl + ROOM_ID;
}
function getRequest(link, asyncFunc){
    axios.get(link)
    .then(function (response) {
        console.log(response);
        // asyncFunc(response);
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function(){
    });
}
function sendSchedule(link, message){
    axios.post(link, message)  
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}