const express = require('express');

var app = express();
var router = express.Router();
const ConnectionDB = require('./../utility/connectionDB');
const Connection = require('./../models/connection');

app.set('view engine', 'ejs'); // using ejs as the view engine
app.use('/assets/images', express.static('assets/images'));

router.get('/',function (req,res) {
  let connection;

  let connectionId = req.query.connectionId;
  //console.log(connectionId);
  if(connectionId != undefined){
  const connectionDB = new ConnectionDB();
    connection = connectionDB.getConnection(connectionId);

   connection = new Connection(
     connection.connectionId, connection.connectionName, connection.connectionTopic,
       connection.detail, connection.location,connection.host, connection.date, connection.startTime, connection.endTime,
   connection.link);
app.locals.user = req.session.theUser;

   let data = {
     "connection": connection,
     theUser : req.session.theUser,
   };

  //console.log(data);
  res.render("connection", { qs: data },{theUser: req.session.theUser});
} else {res.render ("savedConnections")}



});

router.get('/connection/:connectionId',function (req,res) {
  let connectionId = req.query.connectionId;
  if(validateConnectionId(connectionId)){
    try {



  const connectionDB = new ConnectionDB();
   let connection = connectionDB.getConnection(connectionId);

    connection = new Connection(
     connection.connectionId, connection.connectionName, connection.connectionTopic,
       connection.detail, connection.location,connection.host, connection.date, connection.startTime, connection.endTime
   );

   let data = {
     "connection": connectiona
   };
  // console.log(data);
res.render("connection", { data: data });
}catch (e){
  error.push(404);
  res.redirect("connections")
}

}else{
  next();
}
});





router.all("/*", function (req, res) {
  let status = null;
const connectionDB = new ConnectionDB();
let topics = connectionDB.getTopics();

let connections = connectionDB.getConnections();

let data = {
  topics: topics,
  connections: connections,
  status: status,
};

if(req.session.theUser){
  res.render("connections", {
    data: data,
    theUser: req.session.theUser,
  });
}else {
  res.render("connections", {data: data});
}

});

function validateConnectionId(connectionID) {
  if (connectionId !== undefined){
    if(Number.isInteger(Number.parseInt(connectionId))){
      return true;
    }else {
    return false;
    }
  }else {
    return false;
  }
}
 module.exports = router;
