const ID_SIZE = 8;                                                  //length of generated room code
const LINK_URL = 'https://httprelay.io/link/' + generateRoomID();   //generated url

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
    const message = "Hello World";
    sendSchedule(LINK_URL, message);
    apiCall(LINK_URL, message);
}


function apiCall(link, message){
    axios.get(link)
    .then(function (response) {
        console.log(response);
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