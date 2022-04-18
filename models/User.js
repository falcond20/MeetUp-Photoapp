class User {
  constructor(userId,firstName, lastName, emailAddress, address, city, state, zip ,country) {
    this.userId = userId;
    this.firstName= firstName;
    this.lastName = lastName;
    this .emailAddress = emailAddress;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.country = country;

  }
  getUserId(){
    return this.userId;
  }
  setUserId(value){
    this.userId = value;
  }

  getFirstname(){
    return this.firstName;
  }
  setFirstName(value){
    this.firstName = value;
  }
  getLastName(){
    return this.lastName;
  }
  setLastName(value){
    this.lastName = value;
  }

  getEmailAddress(){
    return this.emailAddress;
  }
  setEmailAddress(value){
    this.emailAddress = value;
  }
  getAddress(){
    return this.address;
  }
  setAddress(value){
    this.address = value;
  }

  getCity(){
    return this.city;
  }
  setCity(value){
    this.city = value;
  }

  getState(){
    return this.state;
  }
  setState(value){
    this.state = value;
  }

  getZip(){
    return this.zip;
  }
  setZip(value){
    this.zip = value;
  }
  getCountry(){
    return this.country;
  }
  setCountry(value){
    this.country = value;
  }
}

module.exports = User;
