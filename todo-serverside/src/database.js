var sqlite3 = require('sqlite3').verbose()
var filepath = './data/dataserver2.db'

var connection = null;

function createDbConnection() {
  connection = new sqlite3.Database(filepath, (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('Connected to the dataserver database');
    }
   }
  )
  return connection;
};

function getUser(){
  if(connection == null){
    createDbConnection();
  }
}

function insertUser(user){
  if(connection == null){
    createDbConnection();
  }
  connection.exec(`INSERT INTO users VALUES ('`+user.mail+`', '`+ user.username +`', '`+ user.passwort_hash +`')`);
}



module.exports = {
  createDbConnection,
  insertUser,
  getUser
}
