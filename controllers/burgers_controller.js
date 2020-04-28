const express = require("express");
const router = express.Router();
// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

router.get("/", function (req, res) {
  
  burger.all(function (data) {
    let burgObj = {
      burger: data
    };
    
    console.log(burgObj);
    res.render("index", burgObj);
  });
})

router.post("/api/burgers", function (req, res) {
  burger.create([
    "name", 
    "eaten"
  ], 
  [
    req.body.name, 
    req.body.eaten
  ], function (result) {
      // Send back the ID of the new burger
      res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
  let condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update(
    {
    eaten: true
    }, condition, function (result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

router.delete("/api/burgers/:id", function (req, res) {
  let condition = "id = " + req.params.id;

  burger.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});



// Export routes for server.js to use.
module.exports = router;
