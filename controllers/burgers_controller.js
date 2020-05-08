const express = require("express");
const burger = require("../models/burger");

// Create the `router` for the app
const router = express.Router();

router.get("/", function(req, res) {

    burger.selectAll(function(data) {

        var hbsObject = {
            burger: data
        };

        console.log(hbsObject);
        
        res.render("index", hbsObject);

    });
});

router.post("/api/burgers", function(req, res) {
    
    burger.insertOne(
        [ "burger_name", "digested" ], 
        [ req.body.burger_name, req.body.digested ], 
        function(result) {
            // Send back the ID of the new quote
            res.json({ id: result.insertId });
        }
    );
});

router.put("/api/burgers/:id", function(req, res) {

    const condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne(
        { digested: req.body.digested }, 
        condition, 
        function(result) {

            if (result.changedRows == 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
                
            } else {
            res.status(200).end();
            }
        }
    );
});

router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    cat.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

// Export routes for server.js to use.
module.exports = router;