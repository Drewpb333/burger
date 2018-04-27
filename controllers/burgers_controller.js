var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

//creates route for 
router.get("/", function (req, res) {
    //utilizes callback function to create object with burger property
    burger.selectAll(function (data) {
        var burgerObj = {
            burger: data
        };
        //burgerObj is created with index.handlebars temp.
        res.render("index", burgerObj);
        console.log(burgerObj);
    });
});

// allows access to JSON in API
router.get("/api/burgers", function (req, res) {
     //utilizes callback function to create object with burger property
     burger.selectAll(function (data) {
        //burgerObj is created with index.handlebars temp.
        res.json(data);
    });
})

//creates route for posting new row(burger) to burgers_db
router.post("/api/burgers", function (req, res) {
    // creates row for burger in mysql DB
    burger.insert(["burger_name", "devoured"], [req.body.burger_name, false], function (result) {
        res.json({
            id: result.insertId
        });
    })
})

router.put("/api/burgers/:id", function (req, res) {
    var condition = { id: req.params.id };

    burger.update(
        //creates object for rendering
        {
            devoured: req.body.devoured === "true" ? true : false
        },
        condition,
        function (result) {
            // checks to see if updates occured
            if (result.changedRows == 0) {
                return res.status(404).end();
            }
            //successful update response
            res.status(200).end();
        }
    );
});

module.exports = router;