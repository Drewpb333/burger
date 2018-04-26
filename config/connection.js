var mysql = require("mysql");

//creates connection to mysql db
// var connection = mysql.createConnection({
//     host: "localhost",
//     password: "drewpb333",
//     user: "root",
//     database: "burgers_db"
// });

//Heroku DB Name: rublno17sda3th0r
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