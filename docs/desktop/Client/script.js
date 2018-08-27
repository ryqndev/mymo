const LINK_URL = 'https://httprelay.io/link/1t78pQ0KDxGeuI1OKHbR';


function load(){
    // parseRoom();
    createConnection();
}
function parseRoom() {
    var urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get('r'));
}



function getRequest(link){
    axios.get(link)
    .then(function (response) {
        console.log(response.data);
        setRemoteDescriptionOfRemoteConnection(JSON.parse(response.data));
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