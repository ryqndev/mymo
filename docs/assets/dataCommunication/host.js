//      file:///Users/ryanyang/Desktop/Workspace/ScheduleMe/docs/assets/testComm/host.html?sd=10/24/2018&ed=10/30/2018

let startD, 
    endD,
    startT,
    endT,
    numD,
    numT;

let metaData;
/** @todo: use these for production DO NOT FORGET TO SEPARATE PARAMS */
let ROOM_ID = '1t78pQ0KDx';
let MCAST_ID = 'GeuI1OKHbR'
// let ROOM_ID = generateRoomID(ID_SIZE);
// let MCAST_ID = generateRoomID(ID_SIZE);

// let ROOM_URL = httpRelayLink + ROOM_ID;
// let MCAST_URL = httpRelayMCast + MCAST_ID;

let users = [];
let data = {
    'total': 1,
    'plan': []
};


function load(){ 
    parseURL();
    setupPlan();
}
function setupPlan(){
    startT = 36; //# of 15 minutes since 12 am
    endT = 88;


    numD = Math.floor((new Date(endD) - new Date(startD))/86400000);
    numT = endT - startT;
    for(let i = 0; i < numD; i++){
        data['plan'].push(new Array);
        for(let j = 0; j < numT; j++){
            data['plan'][i].push(0);
        }
    }
    // console.log(data['plan']);
    createRoom();
}
function createRoom(){
    metaData = {
        'startDate': startD,
        'endDate': endD,
        'startTime': startT,
        'endTime': endT,
        'numDate': numD,
        'numTime': numT
    };
    openConnection();
}
function openConnection(){
    const ROOM_URL = httpRelayLink + ROOM_ID;
    let newCode = generateRoomID(ID_SIZE);
    users.push(newCode);
    let data = {
        'code': newCode,
        'mcast': MCAST_ID,
        'data': metaData
    };
    postReq(ROOM_URL, JSON.stringify(data), joined); 
    display(users);
}
function joined(){
    let lastJoined = users[users.length - 1];
    getReq(httpRelayLink + lastJoined, getClientSchedule);
    openConnection();
}
function getClientSchedule(data){
    //should start calculations
    display(data);
    calculateNewData(data['plan']);
}
function updateMCAST(MCASTData){
    postReq();

}
/** 
 * @todo set for client
 * @param newPlan - 2d array of 0's and 1's 
 * 
 * */
function calculateNewData(newPlan){
    for(let i = 0; i < data['plan'].length; i++){
        for(let j = 0; j < data['plan'][i].length; j++){
            data['plan'][i][j] += newPlan[i][j];
        }
    }
}


function parseURL() {
    let urlParams = new URLSearchParams(window.location.search);
    startD = urlParams.get('sd');
    endD = urlParams.get('ed');
}
function generateRoomID(SIZE){
    let id = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < SIZE; i++){
        id += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return id;
}