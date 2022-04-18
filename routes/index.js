const express = require('express');
const mongoose = require('mongoose');
var app = express();
var router = express.Router();
var createError = require('http-errors');
const ConnectionDB = require('./../utility/connectionDB');
const Connection = require('./../models/connection');
app.set('view engine', 'ejs'); // using ejs as the view engine
app.use('/assets/images', express.static('assets/images'));
var bodyParser = require('body-parser');
var urlencodedParser  = bodyParser.urlencoded({extended:false});
app.set('view engine', 'ejs'); // using ejs as the view engine
app.use('/assets', express.static('assets'));
mongoose.Promise = global.Promise;

const connectionsModel = require('../utility/connectionSchema');


router.get('/',function (req,res) {
  //console.log(req.session.userProfile);
//  console.log(req.session.theUser);
  app.locals.user = req.session.theUser;
if(req.session.userProfile){
res.render("index", {
  theUser: req.session.theUser,

});

}else {
  res.render("index", {title: "Home"});
}

});




router.get('/connections',function (req,res) {


async function getData() {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
     connectionsModel.find(function (err, data) {
      if (err) return console.error(err);
      console.log("add function");
    //  console.log(data);
    resolve(data);
    });

  },400);
  });

  }
  getData().then(results=>{
    //console.log(results);

  //  console.log(results);
    let data = {
      "connection": results,
      theUser: req.session.theUser,
    };
    //console.log(data);

  res.render("connections", { qs: data });
  })

getData();


});



router.get('/connection',function (req,res) {
  let connection;

  let connectionId = req.query.connectionId;

  //console.log(connectionId);


  function search(dara){
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const results = connectionsModel.find({connectionId: dara});

        resolve(results);
      },400);
      });
    }
    search(connectionId).then(results =>{
      console.log("HEre is the searched connect");
    //  console.log(results);

        let newData;
for (var i = 0; i < results.length; i++) {
  results[i]
newData =  new Connection(results[i].connectionId,results[i].connectionName,
                 results[i].connectionTopic,results[i].detail,results[i].location,results[i].host,results[i].date,
                 results[i].startTime,results[i].endTime,results[i].link);
}


      let data = {
        "connection": newData,
        theUser: req.session.theUser,
      };

     //console.log(data);
     res.render("connection", { qs: data });
   });

  // if(connectionId != undefined){
  // const connectionDB = new ConnectionDB();
  //   connection = connectionDB.getConnection(connectionId);
  //
  //  connection = new Connection(
  //    connection.connectionId, connection.connectionName, connection.connectionTopic,
  //      connection.detail, connection.location,connection.host, connection.date, connection.startTime, connection.endTime,
  //  connection.link);

//    let data = {
//      "connection": connection,
//      theUser: req.session.theUser,
//    };
//
//   //console.log(data);
//   res.render("connection", { qs: data });
// } else {res.render ("savedConnections")}



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
     "connection": connectiona,
     theUser: req.session.theUser,
     };
     //console.log(data);
  res.render("connection", { data: data });
  }catch(e){
    error.push(404);
    res.redirect("connections")
    }

}else{
  next();
}
app.locals.user = req.session.theUser;
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







async function getConnections(){
// const doSomething = async () => {
//   let results = await add();
//   console.log(results);
//   return results;
//   }

}





module.exports = router;
