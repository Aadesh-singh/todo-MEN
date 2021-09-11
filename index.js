const express = require('express');
const port = 8000;
const path = require('path');
const app = express();
const db = require('./config/mongoose');
const tasks = require('./models/todoData');
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', require('./routes/'));
app.use(express.static('static'));
// app.use(express.urlencoded()); 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));


app.listen(port, function(err){
    if(err){
        console.log('Error occured', err);
        return;
    }
    console.log('Express server is Up and Running at: ',port);
});