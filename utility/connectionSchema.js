//const mongoose = require('mongoose');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ConnectionsDB', {useNewUrlParser: true, useUnifiedTopology: true});


const connectionsD = new mongoose.Schema({
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
  });
console.log('Hits the connection schema');
//const connectionsModel = mongoose.model('connectionsModel', connections);
 module.exports = mongoose.model('connections',connectionsD);
//module.exports = connectionsModel;
