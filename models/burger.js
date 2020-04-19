// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");


const burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },

  // The variables cols and vals are arrays.
  create: function(name, cb) {
    orm.create("burgers", [
      "name", "eaten"
    ], [
      name, false
    ], function(res) {
      cb(res);
    });
  },

  update: function(id, cb) {
    let condition = "id=" + id;
    orm.update("burgers", {
      eaten: true
    }, condition, function(res) {
      cb(res);
    });
  },

  delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller.
module.exports = burger;