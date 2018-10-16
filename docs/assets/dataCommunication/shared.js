const ID_SIZE = 20;
const httpRelayLink = 'https://httprelay.io/link/';
const httpRelayMCast = 'https://httprelay.io/mcast/';

function display(data){
    console.log('%c ' + data, 'color: #339933');
    document.getElementById('output').innerHTML += `<br>${data}`;
}

function getReq(link, callback){
    axios.get(link)
    .then(function (response) {
        display(response.data);
        callback(response.data);
    })
    .catch(function (error) {
        display(error);
    })
    .then(function(){
    });
}

function postReq(link, message, callback){
    axios.post(link, message)  
    .then(function (response) {
        display(response);
        callback(reponse);
    })
    .catch(function (error) {
        display(error);
    });
}