const Connection = require('../models/connection');
const connectionsModel = require('../utility/connectionSchema')
//var connectionsModel =
//mongoose.Promise = global.Promise;
const mongoose = require('mongoose');




//var connectionsModela = new connectionsModel();
//console.log(connectionsModel);


const connectionsa = [
  new Connection(
    1,
    "Photography Tutorials",
    "Photography",
    "Charlotte photograpehers are hosting a training sesion for new photograpehers in the city for free",
    "Zoom",
    "James Mensah",
    "27th April 2021",
    "5:30pm",
    "6:30pm",
    "./../assets/images/233filmsWhite.png"
  ),
  new Connection(
    2,
    "Videography Tutorials",
    "Videography",
    "Charlotte Videographers are hosting a training sesion for new photograpehers in the city for free",
    "Uptown Charlotte",
    "Akua Mensah",
    "27th May 2021",
    "5:30pm",
    "6:30pm",
    "./../assets/images/holdingcam.jpg"
  ),
  new Connection(
    3,
    "Photoshop Tutorials",
    "Photography",
    "Professional Photographers are hosting a training sesion for new photograpehers in the city for free",
    "Uptown Charlotte",
    "James Gray",
    "30th May 2021",
    "6:30pm",
    "6:30pm",
    "./../assets/images/photographergirl.jpg"
  ),
  new Connection(
    4,
    "Photographers Meetup",
    "Photography",
    "Meetup for Photographers in Charlotte",
    "Downtown",
    "Shatta Wale",
    "27th April 2021",
    "5:30pm",
    "6:30pm",
    "./../assets/images/looker.jpg"
  ),
]





async function getConnections(){
// const doSomething = async () => {
//   let results = await add();
//   console.log(results);
//   return results;
//   }
async function getData() {


return new Promise((resolve, reject) => {
  setTimeout(() => {
  connectionsModel.find(function (err, data) {
    if (err) return console.error(err);
    console.log("add function");
    console.log(data);
  resolve(data);
  });

},4000);
});

}
getData().then(results=>{
  console.log(results);
  return results;
})

}




class ConnectionDB {
  constructor() {}




 // getConnections(){
 //
 //  var  getConnections = async function(){
 //    return new Promise(function (resolve, reject) {
 //          connectionsModel.find({}, function (err, connections) {
 //              if (err) {
 //                  console.log(err)
 //                  return reject("No Connections");
 //              } else {
 //                  console.log(connections);
 //                  return resolve(connections);
 //              }
 //          })
 //      })
 //  }




getConnection(connectionId){
    if(connectionId !== undefined){
      search(connectionId).then(found =>{
        console.log(found);
      return found;
      });
    }
    else {
      throw new Error("Invalid Connection Id");
    }
  }

  getTopics(){
    let topics = new Array();
    connections.forEach(connection => {
      if(!topics.includes(connection.connectionTopic)){
        topics.push(connection.connectionTopic);
      }

    });
    if(topics !== undefined){
      return topics;
    }
  }


}
const add = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
        connectionsModela.find(function (err, data) {
          if (err) return console.error(err);
          console.log("add function");
      resolve(data);
    });

  },300);

      });
    }


    function search(dara){
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const results = connectionsModela.find({title: dara});

          resolve(results);
        },3000);
        });
      }
//module.exports = {getConnections:getConnections};
module.exports = ConnectionDB;
