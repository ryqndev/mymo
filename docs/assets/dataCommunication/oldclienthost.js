let localConnection;
let sendChannel;
let remoteConnection;
let receiveChannel;
// const dataChannelSend = document.querySelector('textarea#dataChannelSend');
// const dataChannelReceive = document.querySelector('textarea#dataChannelReceive');
// const startButton = document.querySelector('button#startButton');
// const sendButton = document.querySelector('button#sendButton');
// const closeButton = document.querySelector('button#closeButton');
const ICE_SERVERS =
    [
        {
            "url": "stun:global.stun.twilio.com:3478?transport=udp"
        },
        {
            "url": "turn:global.turn.twilio.com:3478?transport=udp",
            "username": "485e4c01fd84c53753b0bf3136e72ec79f5c0e36d852b92698af1b0b29604539", 
            "credential": "pxGFuEuxUP3NaAcY8ITafZt85z0xuQIG/x4tiejW9ck="
        }, 
        {
            "url": "turn:global.turn.twilio.com:3478?transport=tcp", 
            "username": "485e4c01fd84c53753b0bf3136e72ec79f5c0e36d852b92698af1b0b29604539", 
            "credential": "pxGFuEuxUP3NaAcY8ITafZt85z0xuQIG/x4tiejW9ck="
        }, 
        {
            "url": "turn:global.turn.twilio.com:443?transport=tcp", 
            "username": "485e4c01fd84c53753b0bf3136e72ec79f5c0e36d852b92698af1b0b29604539", 
            "credential": "pxGFuEuxUP3NaAcY8ITafZt85z0xuQIG/x4tiejW9ck="
        }
    ];

myIceServers = ICE_SERVERS;
let configuration = { iceServers: myIceServers };

/**
 * 
 * 1. Host creates an offer
 * 2. HTTPrelay should send the offer details o
 * 
 */
function createConnection() {
    // dataChannelSend.placeholder = '';
    window.localConnection = localConnection = new RTCPeerConnection(configuration);
    console.log('Created local peer connection object localConnection');

    sendChannel = localConnection.createDataChannel('sendDataChannel');
    console.log('Created send data channel');

    localConnection.onicecandidate = e => {
        // onIceCandidate(localConnection, e);
        console.log(e);
        localConnection.addIceCandidate(e.candidate).then(
            () => onAddIceCandidateSuccess(localConnection),
            err => onAddIceCandidateError(localConnection, err)
        );
        console.log(`ICE candidate: ${e.candidate ? e.candidate.candidate : '(null)'}`);
    };
    sendChannel.onopen = onSendChannelStateChange;
    sendChannel.onclose = onSendChannelStateChange;

    localConnection.createOffer().then(
        createLocalDescriptionOfLocalConnection,
        onCreateSessionDescriptionError
    );
}

function sendData() {
    // const data = dataChannelSend.value;
    sendChannel.send(data);
    console.log('Sent Data: ' + data);
}

function closeDataChannels() {
    sendChannel.close();
    console.log('Closed data channel with label: ' + sendChannel.label);

    localConnection.close();
    localConnection = null;

    // startButton.disabled = false;
    // sendButton.disabled = true;
    // closeButton.disabled = true;
    // dataChannelSend.value = '';
    // dataChannelReceive.value = '';
    // dataChannelSend.disabled = true;
    // disableSendButton();
    // enableStartButton();
}
function createLocalDescriptionOfLocalConnection(desc) {
    localConnection.setLocalDescription(desc);
    sendLocalConnectionOffer(LINK_URL_1, JSON.stringify(desc));
    //send local description to remote connection
    //should trigger Client's setRemoteDescriptionOfRemoteConnection function
}

function setRemoteDescriptionOfLocalConnection(desc){
    localConnection.setRemoteDescription(desc);
    onSendChannelStateChange();
    // createConnection();
}

function getOtherPc(pc) {
    return (pc === localConnection) ? remoteConnection : localConnection;
}

function getName(pc) {
    return (pc === localConnection) ? 'localPeerConnection' : 'remotePeerConnection';
}
function onCreateSessionDescriptionError(error) {
    console.log(`Failed to create session description: ${error.toString()}`);
}

function onIceCandidate(pc, event) {
    getOtherPc(pc)
        .addIceCandidate(event.candidate)
        .then(
            () => onAddIceCandidateSuccess(pc),
            err => onAddIceCandidateError(pc, err)
        );
    console.log(`${getName(pc)} ICE candidate: ${event.candidate ? event.candidate.candidate : '(null)'}`);
}

function onAddIceCandidateSuccess() {
  console.log('AddIceCandidate success.');
}

function onAddIceCandidateError(error) {
  console.log(`Failed to add Ice Candidate: ${error.toString()}`);
}

function receiveChannelCallback(event) {
    console.log('Receive Channel Callback');
    receiveChannel = event.channel;
    receiveChannel.onmessage = onReceiveMessageCallback;
    receiveChannel.onopen = onReceiveChannelStateChange;
    receiveChannel.onclose = onReceiveChannelStateChange;
}

function onReceiveMessageCallback(event) {
    console.log('Received Message');
//   dataChannelReceive.value = event.data;
}

function onSendChannelStateChange() {
    const readyState = sendChannel.readyState;
    console.log('Send channel state is: ' + readyState);
    if (readyState === 'open') {
        console.log('its open baby');
      // dataChannelSend.disabled = false;
      // dataChannelSend.focus();
      // sendButton.disabled = false;
      // closeButton.disabled = false;
    } else {
        console.log('its closed mdudes');
      // dataChannelSend.disabled = true;
      // sendButton.disabled = true;
      // closeButton.disabled = true;
    }
}

//-============================client===============
let remoteConnection;
let receiveChannel;
// let localConnection;
const ICE_SERVERS =
    [
        {
            "url": "stun:global.stun.twilio.com:3478?transport=udp"
        },
        {
            "url": "turn:global.turn.twilio.com:3478?transport=udp",
            "username": "485e4c01fd84c53753b0bf3136e72ec79f5c0e36d852b92698af1b0b29604539", 
            "credential": "pxGFuEuxUP3NaAcY8ITafZt85z0xuQIG/x4tiejW9ck="
        }, 
        {
            "url": "turn:global.turn.twilio.com:3478?transport=tcp", 
            "username": "485e4c01fd84c53753b0bf3136e72ec79f5c0e36d852b92698af1b0b29604539", 
            "credential": "pxGFuEuxUP3NaAcY8ITafZt85z0xuQIG/x4tiejW9ck="
        }, 
        {
            "url": "turn:global.turn.twilio.com:443?transport=tcp", 
            "username": "485e4c01fd84c53753b0bf3136e72ec79f5c0e36d852b92698af1b0b29604539", 
            "credential": "pxGFuEuxUP3NaAcY8ITafZt85z0xuQIG/x4tiejW9ck="
        }
    ];

myIceServers = ICE_SERVERS;
let configuration = { iceServers: myIceServers };


function createConnection(){
    const servers = null;
    
    window.remoteConnection = remoteConnection = new RTCPeerConnection(configuration);
    console.log('Created remote peer connection object remoteConnection');

    remoteConnection.onicecandidate = e => {
        // onIceCandidate(remoteConnection, e);
        console.log(e);
        remoteConnection.addIceCandidate(e.candidate).then(
            () => onAddIceCandidateSuccess(remoteConnection),
            err => onAddIceCandidateError(remoteConnection, err)
        );
        console.log(remoteConnection);
        console.log(`ICE candidate: ${e.candidate ? e.candidate.candidate : '(null)'}`);
    };
    
    remoteConnection.ondatachannel = receiveChannelCallback;

    getRequest(LINK_URL_1);

}
function closeDataChannels(){
    receiveChannel.close();
    console.log('Closed data channel with label: ' + receiveChannel.label);
    remoteConnection.close();
    remoteConnection = null;

}

function setRemoteDescriptionOfRemoteConnection(desc){
    remoteConnection.setRemoteDescription(desc);
    remoteConnection.createAnswer().then(
      createRemoteConnectionLocalDescription,
      onCreateSessionDescriptionError
    );
}
function onCreateSessionDescriptionError(error) {
    console.log(`Failed to create session description: ${error.toString()}`);
}

function createRemoteConnectionLocalDescription(desc) {
    remoteConnection.setLocalDescription(desc);
    console.log(`Answer from remoteConnection\n${desc.sdp}`);
    sendLocalConnectionOffer(LINK_URL_2, JSON.stringify(desc));
    //send desc info
    //should trigger Host's setRemoteDescriptionOfLocalConnection function
}

function onIceCandidate(pc, event) {
    getOtherPc(pc)
        .addIceCandidate(event.candidate)
        .then(
            () => onAddIceCandidateSuccess(pc),
            err => onAddIceCandidateError(pc, err)
        );
    console.log(`${getName(pc)} ICE candidate: ${event.candidate ? event.candidate.candidate : '(null)'}`);
}
function receiveChannelCallback(event) {
    console.log('Receive Channel Callback');
    receiveChannel = event.channel;
    receiveChannel.onmessage = onReceiveMessageCallback;
    receiveChannel.onopen = onReceiveChannelStateChange;
    receiveChannel.onclose = onReceiveChannelStateChange;
  }
  function onReceiveMessageCallback(event) {
    console.log('Received Message');
    dataChannelReceive.value = event.data;
  }
  function onReceiveChannelStateChange() {
    const readyState = receiveChannel.readyState;
    console.log(`Receive channel state is: ${readyState}`);
  }
  function onAddIceCandidateSuccess() {
    console.log('AddIceCandidate success.');
  }
  
  function onAddIceCandidateError(error) {
    console.log(`Failed to add Ice Candidate: ${JSON.stringify(error)}`);
  }