const express = require('express');

var app = express();
var router = express.Router();
const ConnectionDB = require('./../utility/ConnectionDB');
const Connection = require('./../models/connection');
app.set('view engine', 'ejs'); // using ejs as the view engine
app.use('/assets/images', express.static('assets/images'));

// let database = async()=>{
//   let connectionId = req.query.connectionId;
//   const connectionDB = new ConnectionDB();
//
//
// }

router.get('/',function (req,res) {
console.log('Hello');

   let connectionId = req.query.connectionId;
   const connectionDB = new ConnectionDB();
function getConnectionsData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    let  connection = connectionDB.getConnections();
    resolve(connection);
    });

    },400);

}

var newdata  = getConnectionsData().then(results =>{
  console.log(results);
  let data = {
    "connection": results,
    theUser: req.session.theUser,
  };
  //console.log(data);

res.render("connections", { qs: data });
});

  let  connectiona = new Connection(
      connection.connectionId, connection.connectionName, connection.connectionTopic,
        connection.detail, connection.location,connection.host, connection.date, connection.startTime, connection.endTime
    );

    let data = {
      "connection": connection,
      theUser: req.session.theUser,
    };
    //console.log(data);

  res.render("connections", { qs: data });



});



 module.exports = router;
