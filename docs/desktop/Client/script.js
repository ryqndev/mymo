const LINK_URL_1 = 'https://httprelay.io/link/1t78pQ0KDx';
const LINK_URL_2 = 'https://httprelay.io/link/GeuI1OKHbR';


function load(){
    // parseRoom();
    createConnection();
    createCalendar();
}
function parseRoom() {
    var urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get('r'));
}

function getRequest(link){
    axios.get(link)
    .then(function (response) {
        console.log(response.data);
        setRemoteDescriptionOfRemoteConnection(response.data);
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