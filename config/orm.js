var connection = require("./connection.js");

//Object of Methods for Object Relational Mapping
var orm = {
    selectAll: function () {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function () {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function (burgerName) {
        var queryString = "INSERT INTO burgers(burger_name) WHERE ?";
        connection.query(queryString, [burgerName], function () {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function () {
        var queryString = "UPDATE burgers SET devoured ? WHERE ?";
        connection.query(queryString, [isDevoured, burgerName], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
};

module.exports = orm;



module.exports = orm;