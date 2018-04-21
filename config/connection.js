var mysql = require("mysql");

//creates connection to mysql db
var connection = mysql.createConnection({
    host: "localhost",
    password: "drewpb333",
    user: "root",
    database: "burgers_db"
});

//connects to mysql db
connection.connect(function (err) {
    if(err){
        return console.log(err);
    }
    console.log("Connected at id: " + connection.threadId);
});


module.exports = connection;