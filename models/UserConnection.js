 const Connection = require('./../models/Connection');

class UserConnection {
  constructor(connection,rsvp) {
    if (connection instanceof Connection){
      console.log("connection in userConnection");
      this.connection = connection; //connection object
    }else {
      throw new Error('Should be a connection object')
    }
    this.rsvp = rsvp;
    console.log(connection);
  }


getConnection(){
  return this.connection;
}
  setConnection(value){
    if (connection instanceof Connection){

      this.connection = value; //connection object
    }else {
      throw new Error('Should be a connection object')
    }
  }
  getRsvp(){
    return this.rsvp;
  }
  setRsvp(value){
    this.rsvp = value;
  }
}
module.exports = UserConnection;
