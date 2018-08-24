const ID_SIZE = 6;      //length of generated room code
const LINK_URL = 'https://httprelay.io/link/' + generateRoomID();

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
}


function apiCall(){
    axios.get('https://api.github.com/users/Ryabn/repos')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
    });
}
