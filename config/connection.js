var mysql = require("mysql");

//for deploying on Heroku
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "drewpb333",
        database: "burgers_db"
    })
}


//connects to mysql db
connection.connect(function (err) {
    if (err) {
        return console.log(err);
    }
    //verifies that connection has been made
    console.log("Connected at id: " + connection.threadId);
});


module.exports = connection;