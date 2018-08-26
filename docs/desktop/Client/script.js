
function load(){
    parseRoom();
}
function parseRoom() {
    var urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get('r'));
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
