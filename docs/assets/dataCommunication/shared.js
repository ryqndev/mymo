/**
 * @author Ryan Yang
 */

const ID_SIZE = 10;
const httpRelayLink  = 'https://httprelay.io/link/';
const httpRelayMCast = 'https://httprelay.io/mcast/';

let startD, 
    endD,
    startT,
    endT,
    numD,
    numT;

let data = {
    'plan': []
}
function display(data){
    console.log(data);
    document.getElementById('output').innerHTML = `${JSON.stringify(data)}`;
}
function populatePlan() {
    for ( let i = 0; i < numD; i++ ) {
        data[ 'plan' ].push( new Array );
        for ( let j = 0; j < numT; j++ ) {
            data[ 'plan' ][ i ].push( 0 );
        }
    }
}
/** 
 * @todo set for client
 * @param newPlan - 2d array of 0's and 1's 
 * 
 */
function addPlan( newPlan ) {
    for ( let i = 0; i < data[ 'plan' ].length; i++ ) {
        for ( let j = 0; j < data[ 'plan' ][ i ].length; j++ ) {
            data[ 'plan' ][ i ][ j ] += newPlan[ i ][ j ];
        }
    }
}
function postReq( link, message, callback ) {
    // axios.post( link, message )
    //     .then( function ( response ) {
    //         callback( response );
    //     } )
    //     .catch( function ( error ) {
    //         display( error );
    //     } );

        fetch(link, {
            method: 'POST',
            body: JSON.stringify(message)
        }).then(resp => {
            callback(resp.json())
        });
}
function getReq( link, callback ) {
    // axios.get( link )
    //     .then( function ( response ) {
    //         callback( response.data );
    //     } )
    //     .catch( function ( error ) {
    //         display( error );
    //     } )
    fetch(link).then(resp => {
        callback(resp.json());
    })
}