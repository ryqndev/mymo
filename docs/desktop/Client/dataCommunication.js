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