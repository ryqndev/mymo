let remoteConnection;
let receiveChannel;

function createConnection(){
    const servers = null;
    
    window.remoteConnection = remoteConnection = new RTCPeerConnection(servers);
    console.log('Created remote peer connection object remoteConnection');

    // remoteConnection.onicecandidate = e => {
    //     onIceCandidate(remoteConnection, e);
    // };
    // remoteConnection.ondatachannel = receiveChannelCallback;

    getRequest(LINK_URL);

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

function createRemoteConnectionLocalDescription(desc) {
    remoteConnection.setLocalDescription(desc);
    console.log(`Answer from remoteConnection\n${desc.sdp}`);
    sendLocalConnectionOffer(LINK_URL, JSON.stringify(desc));
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