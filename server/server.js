const express = require('express');
const app = express();

app.all('/', function(req, res, next) {
    // res.header('Access-Control-Allow-Origin', 'https://ryabn.github.io');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
});

app.get('/', function(req, res){
    parseUserAction(req, res);
    console.log(JSON.stringify(playerList, null, 4));
});

function parseUserAction(req, res){
    var userAction = req.query.getInfo;
    switch(userAction){
        case 'createEvent':
            createEvent(req, res);
            break;
        case 'addTimeBlock':
            addTimeBlock(req, res);
            break;

        default:
            res.send(playerList[req.query.gamelink]['gameDetails']);
            break;
    }
}

function addTimeBlock(req, res){
    
}

function isAfterToday(time){
    return Date.now() < time;
}

/**
 * Schema
 * 
 * {
 *  "some generated key" : {
 *      "eventName" : "event name",
 *      "startDate" : "mm/dd/yyyy",
 *      "endDate" : "mm/dd/yyyy",
 *      "eventCreated" : 123456,     //time in milliseconds
 *      "eventExpired" : 123456,       //time in milliseconds
 *  },
 *  "some other key" : {
 *      "eventName" : "event name",
 *      "startDate" : "mm/dd/yyyy",
 *      "endDate" : "mm/dd/yyyy",
 *      "eventCreated" : 123456,     //time in milliseconds
 *      "eventExpired" : 123456,       //time in milliseconds
 *  }
 * }
 * 
 * 
 ** *****************
 *  data storage
 * 
 * "some generated key" : {
 *      "eventName" : "event name",
 *      "startDate" : "mm/dd/yyyy",
 *      "endDate" : "mm/dd/yyyy",
 *      "startTime" : "hr:min",    //military time
 *      "endTime" : "hr:min",
 *      "eventCreated" : 123456,     //time in milliseconds
 *      "eventExpired" : 123456,       //time in milliseconds
 *      "attendees" : [
 *          {
 *              "name" : "nombre",
 *              "timeblock" : "123456-123457:1/123459-123460:3" //timeblock will be times that cannot be made. (:number) represents priority 
 *          },
 *          {
 *              "name" : "nombre",
 *              "timeblock" : "123456-123457/123459-123460"
 *          },
 *          {
 *              "name" : "nombre",
 *              "timeblock" : "123456-123457/123459-123460"
 *          }
 *      ]
 *  }
 * 
 */