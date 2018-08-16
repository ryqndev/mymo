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
