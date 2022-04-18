 const express = require('express');


var app = express();
var router = express.Router();
 app.set('view engine', 'ejs'); // using ejs as the view engine
app.use('/assets/images', express.static('assets/images'));
app.use('/assets/', express.static('assets/'));
var createError = require('http-errors');
// Create a session
var bodyParser = require('body-parser');
var urlencodedParser  = bodyParser.urlencoded({extended:false});
var session = require('express-session');


const Connection = require('./models/Connection');
const User = require('./models/User');
const connectionsModel = require('./utility/connectionSchema')
//var connectionsModel =
//mongoose.Promise = global.Promise;
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ConnectionsDB', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
console.log("we are connected");

});





var index = require('./routes/index.js');
var savedConnections = require('./routes/savedConnections.js');
var connection = require('./routes/connection.js');
var connections = require('./routes/connections.js');
var newconnection = require('./routes/newconnection.js');
var userController = require('./routes/userController.js');

app.use(
    session({
    resave: true,
    saveUninitialized: true,
    secret: 'makenote'

}));


app.use('/', index);
//app.use('/savedConnections', index);


app.use('/connection', connection);
app.use('/About', index);
app.post('/connection',urlencodedParser, function (req,res, next) {


  next();

});
//app.use('/savedConnections/rsvp', userController);
app.use('/savedConnections', userController);
//app.use('/signout', userController);
//app.use('/savedConnections', savedConnections);
app.use('/connections', connections);
app.use('/newconnection', newconnection);
//catch 404 error and pass to error handler
//app.use(function (err,req,res) {
//  next(createError(404));
//});
/*
app.use(function(err, req, res, next){
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "develoment" ? err: {};

  // render error page
  res.status(err.status || 500);
  res.render("error")
});
app.get('/about', function (req,res) {
  res.render('about');
});

*/
app.listen(8083);

module.exports = router;
