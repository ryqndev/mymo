Jan 07, 2018<br>
08:40PM


# Working with the datacommunication

I'm revising a ton of old code so I need to go through the entire process it goes through. To sum up, it's an extremely hacky way of establishing a p2p connection between the host and many clients. The way it works is through a service called httprelay. Through httprelay, I send a bunch of data that is stored on their servers for a short while. The different code will result in different file paths of httpsrelay and the data is store/retrived through GET/POST api calls.

## client.js
```javascript
function sendDataToHost( data ) {
    const HOST_URL = httpRelayLink + HOST_ID;
    postReq( HOST_ID, data, waitForOthers );
}
function waitForOthers(){
    const HOST_URL = httpRelayLink + HOST_ID;
    getReq(HOST_ID, getFinal);
}
function getFinal(){
    const MCAST_URL = httpRelayMCast + MCAST_ID;
    getReq(MCAST_URL, getPlans);
}
function submitVote(vote){
    const HOST_URL = httpRelayLink + HOST_ID;
    postReq(HOST_URL, vote, getResults);
}
```

As you can see, the client.js file is just a series of api calls alternating between post and get requests. To understand how httprelay works, you can read about it on their [site](https://httprelay.io) as well as do live testing of their service

This is the way my app does it's data communication and there are some problems 

* collision where somehow two plans that are generated with the same room code (highly unlikely)
* some dude hates me and wants to take down my service so he loops through every combination and either breaks a bunch of plans or crashes the httprelay service - both of which are bad

The best solution to this is to run a server that I manage and all that but then I rack up server costs and I really don't want to do that.

# Understanding the path

To understand the path, we must first understand how httprelay works. There are two different functions of httprelay but they both operate the same way. The way information is transferred through the server is that you make a POST request to https://httprelay.io/\<room code\>. The body of the post request is stored on their servers and the next GET request to that exact same url will recieve the stored message as a response. Here is where the two functionalities differ. The first is the standard relay in which as soon as the get request is sent and responded to, the data is deleted and ready to send another message. The second way is called mcast and it stores the data until the next post request updates the data and it can take as many get requests as it would like.

The starting point is the host. The host generates a room code and an mcast id. This is the access point for all clients to get in touch with the host.
The host also generates a separate unique id for every client