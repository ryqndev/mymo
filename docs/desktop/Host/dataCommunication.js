let localConnection;
let sendChannel;
// const dataChannelSend = document.querySelector('textarea#dataChannelSend');
// const dataChannelReceive = document.querySelector('textarea#dataChannelReceive');
// const startButton = document.querySelector('button#startButton');
// const sendButton = document.querySelector('button#sendButton');
// const closeButton = document.querySelector('button#closeButton');


/**
 * 
 * 1. Host creates an offer
 * 2. HTTPrelay should send the offer details o
 * 
 */
function createConnection() {
    // dataChannelSend.placeholder = '';
    const servers = null;
    window.localConnection = localConnection = new RTCPeerConnection(servers);
    console.log('Created local peer connection object localConnection');

    sendChannel = localConnection.createDataChannel('sendDataChannel');
    console.log('Created send data channel');

    localConnection.onicecandidate = e => {
        onIceCandidate(localConnection, e);
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
    console.log(`Offer from localConnection\n${desc.sdp}`);
    //send local description to remote connection
    //should trigger Client's setRemoteDescriptionOfRemoteConnection function
}

function setRemoteDescriptionOfLocalConnection(desc){
    localConnection.setRemoteDescription(desc);

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
      // dataChannelSend.disabled = false;
      // dataChannelSend.focus();
      // sendButton.disabled = false;
      // closeButton.disabled = false;
    } else {
      // dataChannelSend.disabled = true;
      // sendButton.disabled = true;
      // closeButton.disabled = true;
    }
}

function onReceiveChannelStateChange() {
    const readyState = receiveChannel.readyState;
    console.log(`Receive channel state is: ${readyState}`);
}