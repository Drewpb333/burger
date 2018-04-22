var connection = require("./connection.js");

//allots for proper number of ? marks
function printQMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

//Object of Methods for Object Relational Mapping
var orm = {
    selectAll: function (table, callback) {
        var queryString = "SELECT * FROM" + table + ";";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    insertOne: function (table, col, vals, callback) {
        var queryString = "INSERT INTO" + table;

        //prevents SQL injection
        queryString += " (";
        queryString += col.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQMarks(vals.length);
        queryString += ");";
    
        connection.query(queryString, [burgerName], function (result) {
            if (err) throw err;
            callback(result);
        });
    },
    updateOne: function (burgerName) {
        var queryString = "UPDATE burgers SET devoured TRUE WHERE burger_name= ?";
        connection.query(queryString, [isDevoured, burgerName], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
};

module.exports = orm;



module.exports = orm;