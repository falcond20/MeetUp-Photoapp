




async function addUser() {

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



var ad = function (){
  /** Finds and retrieves all of the connections stored in the database **/
  return new Promise(function (resolve, reject) {
    connectionsModel.find({}, function (err, connections) {
          if (err) {
              console.log(err)
              return reject("No Connections");
          } else {
              console.log(connections);
              resolve(connections);
          }
      })
  })
}
