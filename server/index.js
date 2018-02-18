/**
 * Module Dependencies
 */
const config = require('./config');
var twilioNotifications = require('./middleware/twilioNotifications');
const restify = require('restify');
const mongoose = require('mongoose');
const restifyPlugins = require('restify-plugins');

var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    Rating = require('./models/todo'), //created model loading here
    bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(config.db.uri);

const db = mongoose.connection;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

var routes = require('./routes/index.js'); //importing route
routes(app); //register the route

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.use(twilioNotifications.notifyOnError);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
