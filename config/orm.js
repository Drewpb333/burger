var connection = require("./connection.js");

//allots for proper number of ? marks
function printQMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

//converts key values pairs to proper SQL syntax
function convertToSql(obj) {
    var arr = [];

    // fills array with newly created SQL syntax
    for (var key in obj) {
        var value = obj[key];
        if (Object.hasOwnProperty.call(obj, key)) {
            //maintains string property in SQL
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // converts colon to equal sign
            arr.push(key + "=" + value);
        }
    }
}

//Object of Methods for Object Relational Mapping
var orm = {
    selectAll: function (table, callback) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    insert: function (table, col, vals, callback) {
        var queryString = "INSERT INTO " + table;

        //allows for proper formatting from object to sql syntax
        queryString += " (" + col.toString() + ") ";
        queryString += "VALUES (" + printQMarks(vals.length) + ");";

        connection.query(queryString, vals, function (err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    update: function (table, ObjColNames, condition, callback) {
        // var queryString = "UPDATE " + table;

        // //allows for proper formatting from object to sql syntax
        // queryString += " SET " + convertToSql(ObjColNames);
        // queryString += " WHERE " + condition;

        var queryString = "UPDATE ?? SET ? WHERE ?;"

        var sqlQuery = connection.query(queryString, [table, ObjColNames, condition], function (err, result) {
            if (err) throw err;
            callback(result);
        });

        console.log( sqlQuery.sql );
    }
};

module.exports = orm;