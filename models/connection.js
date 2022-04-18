class Connection {
  constructor(connectionId, connectionName, connectionTopic,
    detail, location,host, date, startTime, endTime, link) {

    this.connectionId = connectionId;
    this.connectionName = connectionName;
    this.connectionTopic = connectionTopic;
    this.detail = detail;
    this.location =location;
    this.host = host;
    this.date = date;
    this.startTime = startTime;
    this.endTime = endTime;
    this.link = link;
  }
  getConnectionId(){
    return this.connectionId;
  }
  setCodeConnectionId(id){
    this.connectionId = id;
  }
  getConnectionName(){
    return this.connectionName;
  }
  setConnectionName(name){
    this.connectionName = id;
  }
  getConnectionTopic(){
    return this.connectionTopic;
  }
  setConnectionTopic(topic){
    this.connectionTopic = topic;
  }

  getDetail(){
    return this.detail;
  }
  setDetail(detail){
    this.detail = detail;
  }
  getLocation(){
    return this.location;
  }
  setLocation(loaction){
    this.loaction = loaction;
  }
  getHost(){
    return this.host;
  }
  setHost(host){
    this.host = host;
  }
  getDate(){
    return this.date;
  }

  setDate(date){
    this.date = date;
  }
  getstartTime(){
    return this.startTime;
  }
  setstartTime(startTime){
    this.startTime = startTime;
  }
  getendTime(){
    return this.endTime;
  }
  setendTime(endTime){
    this.endTime = endTime;
  }

}
module.exports = Connection;
