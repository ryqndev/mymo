/**
 * @author Ryan Yang
 */
const ROOM_ID = '1t78pQ0KDxGeuI1OKHbR';
// const LINK_URL = 'https://httprelay.io/mcast/1t78pQ0KDxGeuI1OKHbR';
// const LINK_URL = 'https://httprelay.io/link/1t78pQ0KDxGeuI1OKHbR';
const LINK_URL_1 = 'https://httprelay.io/link/1t78pQ0KDx';
const LINK_URL_2 = 'https://httprelay.io/link/GeuI1OKHbR';

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


function load(){
    // console.log(LINK_URL_1);
    // createCalendar();
    // createConnection();
    // getRequest(LINK_URL_2);
    createCalendar();
    selectDesktop();
}
function generateQRCode(){
    document.getElementById('qr').src = qrCodeBaseUrl + ROOM_ID;
}
function submit(){
    let selectedDate = document.getElementById('start-date').value;
    console.log(selectedDate);
}

function getRequest(link){
    axios.get(link)
    .then(function (response) {
        console.log(response);
        setRemoteDescriptionOfLocalConnection(response.data);
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function(){
    });
}
function sendLocalConnectionOffer(link, message){
    axios.post(link, message)  
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}