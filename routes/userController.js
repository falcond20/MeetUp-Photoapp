const express = require('express');
// create an app express variable
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser  = bodyParser.urlencoded({extended:false});
const ConnectionDB = require('./../utility/ConnectionDB');
const Connection = require('./../models/connection');
const User = require('./../models/User');
const UserProfile = require('./../models/user-profile');
const userDB = require('./../utility/UserDB');
app.set('view engine', 'ejs'); // using ejs as the view engine
app.use('/assets/images', express.static('assets/images'));
let error = new Array(1);
console.log('In the user Controller');
// appication routing
router.get("/logins" , function (req,res, next) {
initSessionVariable(req, res);
  res.render("login");
  app.locals.user = req.session.theUser;
});

// GET connection login
router.post("/logins", function (req,res, next) {
initSessionVariable(req, res); // create a session user
//
let data = {
  userProfile: req.session.userProfile,

};
 //render the saved connection  passing in the sesion and user profile
res.render("savedConnections", {
  theUser: req.session.user,
userConnection :req.session.userProfile.userConnection ,
});
});

//chek session data
router.get("/", urlencodedParser, function (req,res, next){
initSessionVariable(req, res);
// check if there is a user session
  if(!req.session.theUser){
    res.render("login");

  }else {
    res.render("savedConnections", {

      theUser: req.session.user,


        userConnection :req.session.userProfile.userConnection ,
    });

    next();
  }


});



//POST myconnections
router.post("/rsvp", urlencodedParser, function (req,res, next){
initSessionVariable(req, res);
  if(!req.session.theUser){
    res.render("login");

  }else {
//  get the connectionId
let code = req.body.connectionId;
//console.log(req.body);

let rsvp = "";
// check the rsvp parameter
if (req.body.rsvp.toUpperCase() == 'YES' ||
    req.body.rsvp.toUpperCase() == 'NO' ||
    req.body.rsvp.toUpperCase() == 'MAYBE'
  ) {
    rsvp = req.body.rsvp;
    }

    try {

      let userProfile = new UserProfile(

      req.session.userProfile.user,
        req.session.userProfile.userConnection,
      );
      //console.log(userProfile.user);
      let connectionDB = new ConnectionDB();
      var connection = connectionDB.getConnection(code);
      userProfile.addConnection(connection, rsvp);

      req.session.userProfile = userProfile;
      //console.log("UserProfile");
//      console.log(req.session.userProfile);
      res.render("savedConnections", {
          //theUser: data.userProfile.user,
        theUser: req.session.user,
      //  userConnections: data.userProfile.userConnection

          userConnection :req.session.userProfile.userConnection ,
      });

    } catch (e) {
        console.log(e);
        error.push(404);


    }}
    app.locals.user = req.session.theUser;
next();
});

//POST connections delete
router.post("/delete", urlencodedParser, function (req,res, next){
initSessionVariable(req, res);
  //console.log("Delete method Method");
  let code = req.body.connectionId;

if (req.session.theUser) {

    try {
    let  rsvp = req.body.rsvp;
      let userProfile = new UserProfile(

        req.session.userProfile.user,
        req.session.userProfile.userConnection
      );
      //console.log(userProfile.user);
      let connectionDB = new ConnectionDB();
      var connection = connectionDB.getConnection(code);
      userProfile.removeConnection(connection, rsvp);

      req.session.userProfile = userProfile;
      //console.log("UserProfile");
  //    console.log(req.session.userProfile);
      res.render("savedConnections", {
          //theUser: data.userProfile.user,
        theUser: req.session.user,
      //  userConnections: data.userProfile.userConnection

          userConnection :req.session.userProfile.userConnection ,
      });
      } catch (e) {
        console.log(e);
        error.push(404);
      }

    } else {
      initSessionVariable(req,res);
    }
app.locals.user = req.session.theUser;
});


//GET new connections
router.get("/newconnection", function (req,res, next){

});

router.get("/signout", function (req,res, next){
req.session.destroy();
res.render('index',{title: "Home"});
});


async function initSessionVariable(req, res) {
  console.log('I am instantVariable');
  async function getUser() {

  return new Promise(function (resolve, reject) {
        let user =  userDB;
            if (err) {
                console.log(err)
                return reject("No User");
            } else {
              console.log("This is the user");
              console.log(user);
                return resolve(user);
            }
    },400);
}
    getUser().then(results=>{
      console.log(results);
      let theUser;
for (var i = 0; i < results.length; i++) {
results[i]
theUser =  new User(results[i].userId,results[i].firstName,
               results[i].lastName,results[i].emailAddress,results[i].address,results[i].city,results[i].state,
               results[i].zip,results[i].country);
}
console.log(theUser);
req.session.theUser = theUser;


    })

getUser();



  // // create a user
  // let usera = new User("1234", "Kofi","Meka", "Andy@uncc.com", "Huntersville", "Charlotte","NC");
  //  // create a session user
  //  req.session.theUser = usera;
  //
  //  //storing user in initSessionVariable
  //  req.session.userProfile = new UserProfile(usera, []);
  //  //console.log(req.session);
  //  app.locals.user = req.session.theUser;
}
module.exports = router;
