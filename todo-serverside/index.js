//Imports
const express = require('express');
const cors = require('cors');
var favicon = require('serve-favicon');

var path = require('path');
var repository = require('./src/repository')

//Express-App initialisieren
const app = express();             
const port = 8081;               

//Icon einbinden
app.use(favicon(path.join(__dirname, 'assets', 'favicon.ico'))); 

//CORS erlauben für Localhost
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));


//############## REST SCHNITTSTELLEN ################
//Landingpage, falls jemand das Backend direkt aufruft
app.get('/createUser', (req, res) => {
    let user = {}
    user.mail = req.query.mail
    user.username = req.query.username
    user.passwort_hash = req.query.passwort_hash
    repository.createUser(user)

    return res.sendStatus(200);
});

//Sende die Daten der Tabelle an sich ans Frontend
//app.get('/data', (req, res) => { 
//    return res.send(Object.values(repository.getJSONData()));
//})


// ############### REST SCHNITTSTELLLEN ENDE ##############

//Ausloggen von Serverstart erfolgreich
app.listen(port, () => {
    console.log(`Now listening on port ${port}`); 
});