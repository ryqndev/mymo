/**
 * @author Ryan Yang
 */

const httpRelayLink  = 'https://httprelay.io/link/';
const httpRelayMCast = 'https://httprelay.io/mcast/';
let room;

function postReq( link, message, callback ) {
    console.log(link, message);
    fetch(link, {
        method: 'POST',
        body: JSON.stringify(message)
    }).then(resp => {
        callback(resp.json())
    }).catch(err =>{
        alert("An error occured: " + err);
    });
}
function getReq( link, callback ) {
    console.log(link);
    fetch(link)
    .then(resp => {
        return resp.json();
    }).then(resp => {
        init(resp);
    })
    .catch(err => {
        alert("An error occured: " + err);
    })
}

function load(){
    let params = (new URL(document.location)).searchParams;
    room = params.get("id");
    getReq( httpRelayMCast + room , init);
}
function aggregateSchedule(){
    getReq()
}