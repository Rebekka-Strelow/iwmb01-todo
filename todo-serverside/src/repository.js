//Database-Konfig
var database = require("./database.js")

//Methoden, die für die API bereit gestellt werden
const createUser = (user) => {
    database.insertUser(user);
}

//Bereitstellen der Methdoen für die API
module.exports = {
    createUser
}
