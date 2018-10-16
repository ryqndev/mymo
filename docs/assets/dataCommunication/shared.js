const ID_SIZE = 10;
const httpRelayLink = 'https://httprelay.io/link/';
const httpRelayMCast = 'https://httprelay.io/mcast/';

function display(data){
    console.log(data);
    document.getElementById('output').innerHTML += `<br>${JSON.stringify(data)}`;
}


function postReq(link, message, callback){
    axios.post(link, message)  
    .then(function (response) {
        callback();
    })
    .catch(function (error) {
        display(error);
    });
}
function getReq(link, callback){
    axios.get(link)
    .then(function (response) {
        callback(response.data);
    })
    .catch(function (error) {
        display(error);
    })
}
