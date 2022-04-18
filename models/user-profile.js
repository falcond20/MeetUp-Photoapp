const User = require('./../models/User');
const UserConnection = require('./../models/UserConnection');
const Connection = require('./../models/Connection');


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/UserDB', {useNewUrlParser: true, useUnifiedTopology: true});




const userProfileSchema = new mongoose.Schema({
    userId:{type:Number},
    connectionId: {type: Number, required:true},
    connectionName: {type: String, required:true},
    connectionTopic: {type: String},
    detail:{type:String},
    location:{type:String},
    host:{type:String},
    date:{type:String},
    startTime:{type:String},
    endTime:{type:String},
    link:{type:String},
    rsvp:{type:String}
  });

    let userDatabase = mongoose.model('userProfile',userProfileSchema);




var addRSVP = function (data){
  /** Finds and retrieves all of the connections stored in the database **/
  return new Promise(function (resolve, reject) {
    const newConnect = new userDatabase(dara);
          if (err) {
              console.log(err)
              return reject("No Connections");
          } else {

      console.log("about to save");
      newConnect.save();
      resolve(dara);
          }

  })
}



var addRSVP = function (data){
  /** Finds and retrieves all of the connections stored in the database **/
  return new Promise(function (resolve, reject) {
    const newConnect = new userDatabase(dara);
          if (err) {
              console.log(err)
              return reject("No Connections");
          } else {

      console.log("about to save");
      newConnect.save();
      resolve(dara);
          }

  })
}



//
// function add(dara){
//
//
//   return new Promise((resolve, reject) => {
//
//     setTimeout(() => {
//       const newUserconnect = new userDatabase(dara);
//       console.log("about to save");
//       newCourse.save();
//       resolve(dara);
//
// },300);
//   });
// }


// add(data).then(course =>{
//    coursesModel.find(function (err, resolve) {
//      if (err) return console.error(err);
//      console.log(data.title);
//  res.render("details", { course: resolve });
//  })
// });














class UserProfile {
  constructor(user, userConnections) {
    this.user = user;
    this.userConnection = userConnections;
  }




  addConnection(connection, rsvp){
    var flag = 0;
    console.log(connection);
    console.log(rsvp);

    if(connection instanceof Connection && (rsvp !== undefined || rsvp)){

      for (var i = 0; i < this.userConnection.length; i++) {
        console.log(this.userConnection[i].connection.connectionId);
        if (this.userConnection[i].connection.connectionId === connection.connectionId) {
          this.userConnection[i].rsvp = rsvp;
          flag = 1;
          break;
        }
      }
      if (flag == 0) {
        let newUserConnection = new UserConnection(connection, rsvp);
        this.userConnection.push(newUserConnection);

      }
      console.log(this.userConnection);
    }else {
      throw new Error("Connection should be a connection object");
    }
  }
  removeConnection(connection, rsvp){
      if(connection instanceof Connection && (rsvp != undefined || rsvp == "NO")){
        for (var i = 0; i < this.userConnection.length; i++) {
          if (this.userConnection[i].connection.connectionId == connection.connectionId){
            this.userConnection.splice(i,1);
            break;

          }
        }
      }else {
        throw new Error(" Connection should be a connection object, cant remove");
      }
  }
  getConnections(){
    return this.userConnection;
  }
  updateConnection(){

  }
}
module.exports = UserProfile;
// module.exports = {
//     getUserProfile: getUserProfile,
//     addRSVP: addRSVP,
//     updateRSVP: updateRSVP,
//     deleteRSVP: deleteRSVP,
//     addConnectionData: addConnectionData
// }
