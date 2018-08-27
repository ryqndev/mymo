let remoteConnection;
let receiveChannel;

function createConnection(){
    const servers = null;
    
    window.remoteConnection = remoteConnection = new RTCPeerConnection(servers);
    console.log('Created remote peer connection object remoteConnection');

    remoteConnection.onicecandidate = e => {
        onIceCandidate(remoteConnection, e);
    };
    remoteConnection.ondatachannel = receiveChannelCallback;

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
    //send desc info
    //should trigger Host's setRemoteDescriptionOfLocalConnection function
}