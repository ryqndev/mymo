/**
 * @description
 *  Multicast communication method provides one to many data transfers. Multicast 
 *  communication method must be used when there are many receivers and sender
 *  don't need to know when or if receivers received it's data.
 * 
 * @example
    Send data: POST https://httprelay.io/mcast/your_secret_channel_id
    Receive data GET https://httprelay.io/mcast/your_secret_channel_id
    
 * Sender's request will finish as soon as all data is transferred to the server. 
 * If receiver makes request prior sender, receiver request will idle till sender makes 
 * the request. Each request receiver receives cookie "SeqId" with the sequence number.
 * On next request receiver will wait till sender sends new data. Cookies must be enabled
 * on receiver side or it will receive same data multiple times and there will be no 
 * way to tell when new data is available. Data will be available on channel for 1h 
 * since last channel access. 
 */
const httpRelayMCast = 'https://httprelay.io/mcast/';
const httpRelayLink = 'https://httprelay.io/link/';

/**
 * @function generateRoomID
 * Returns random string. If user is case sensitive, the possible
 * permutations of this function is 62 ^ (SIZE)
 * @param {*} SIZE integer
 */
function generateRoomID( SIZE ) {
    let id = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for ( let i = 0; i < SIZE; i++ ) {
        id += possible.charAt( Math.floor( Math.random() * possible.length ) );
    }
    return id;
}

/**
 * @function GETRequest
 * @param {string} link - link for GET request http endpoint
 * @param {function} callback - calls this function with the server response
 *  in parsed JSON format on success.
 * @param {function} fail - called if httpreq fails, if no fail parameter is
 *  put in function call, default will alert to browser
 */
function GETRequest( link, callback=defaultCallback, fail=defaultFail) {
    fetch(httpRelayMCast + link, {
        credentials: 'include'
    }).then(resp => { return resp.json();
    }).then(resp => { callback(resp);
    }).catch(err => {fail(err);})
}

/**
 * @function POSTRequest
 * @param {string} link - link for GET request http endpoint
 * @param {function} body - Message to be sent in post req
 * @param {function} callback - calls this function with the server response
 *  in parsed JSON format on success.
 * @param {function} fail - called if httpreq fails, if no fail parameter is
 *  put in function call, default will alert to browser
 */
function POSTRequest(link, body, callback=defaultCallback, fail=defaultFail){
    fetch(httpRelayMCast + link, {
        method: 'POST',
        body: body
    }).then(resp => {callback(resp);
    }).catch(err => { fail(err) });
}

/**
 * @function defaultFail
 * @see GETRequest
 */
function defaultFail(err){
    alert("An error occured: " + err);
}

/**
 * @function defaultCallback
 * @see GETRequest
 */
function defaultCallback(resp){
    return;
}

module.exports = {
    mcast : httpRelayMCast,
    generateSize : generateRoomID,
    receive : GETRequest,
    send : POSTRequest
};