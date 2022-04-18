const Connection = require('../models/connection');
const User = require('./../models/User');
const connectionsModel = require('../utility/connectionSchema')
//var connectionsModel =
//mongoose.Promise = global.Promise;
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ConnectionsDB', {useNewUrlParser: true, useUnifiedTopology: true});


const userSchema = new mongoose.Schema({
    userId: {type: Number, required:true},
    firstName: {type: String, required:true},
    lastName: {type: String},
    detail:{type:String},
    emailAddress:{type:String},
    address:{type:String},
    city:{type:String},
    state:{type:String},
    zip:{type:Number},
    country:{type:String},
  });


let userAccount =   mongoose.model('users',userSchema);




async function getUser() {

  return new Promise(function (resolve, reject) {
        userAccount.find({}, function (err, user) {
            if (err) {
                console.log(err)
                return reject("No User");
            } else {
              //  console.log(user);
                return resolve(user);
            }
        })
    });

}



 var  getUserss = async function(){
   console.log('Hits the UserDB');
   return new Promise(function (resolve, reject) {
         userAccount.find({}, function (err, user) {
             if (err) {
                 console.log(err)
                 return reject("No User");
             } else {
                 console.log(user);
                 return resolve(user);
             }
         })
     })
}

module.exports = getUser();
