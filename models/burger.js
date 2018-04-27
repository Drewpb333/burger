var orm = require("../config/orm.js");

var burger = {
    selectAll: function(callback){
        orm.selectAll("burgers",function(response){
            callback(response);
        })
    },
    insert: function(cols, vals, callback){
        orm.insert("burgers", cols, vals, function(response){
            callback(response);
        })
    },
    update: function(objColNames, condition, callback){
        orm.update("burgers", objColNames, condition, function(response){
            callback(response);
        })
    }
};

module.exports = burger;