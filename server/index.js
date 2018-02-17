/**
 * Module Dependencies
 */
const config = require('./config');
const restify = require('restify');
const mongoose = require('mongoose');
const restifyPlugins = require('restify-plugins');

var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    Rating = require('./models/todo'), //created model loading here
    bodyParser = require('body-parser');

/**
 * Initialize Server
 */
// const server = restify.createServer({
//     name: config.name,
//     version: config.version,
// });

// /**
//  * Middleware
//  */
// server.use(restifyPlugins.jsonBodyParser({ mapParams: true }));
// server.use(restifyPlugins.acceptParser(server.acceptable));
// server.use(restifyPlugins.queryParser({ mapParams: true }));
// server.use(restifyPlugins.fullResponse());
//
// /**
//  * Start Server, Connect to DB & Require Routes
//  */
// server.listen(config.port, () => {
//     // establish connection to mongodb
//     mongoose.Promise = global.Promise;
// mongoose.connect(config.db.uri);
//
// const db = mongoose.connection;
//
// db.on('error', (err) => {
//     console.error(err);
// process.exit(1);
// });
//
// db.once('open', () => {
//     require('./routes')(server);
// console.log(`Server is listening on port ${config.port}`);
// });
// });

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(config.db.uri);

const db = mongoose.connection;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/index.js'); //importing route
routes(app); //register the route

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
