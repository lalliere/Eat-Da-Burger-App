const connection = require("./connection.js");

// Object for all our SQL statement functions.
let orm = {
    //Select all burgers
    all: function (tableInput, cb) {
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    //Create new burger
    create: function (bName, cb) {
        let queryString = "INSERT INTO " + tableInput + " (burger_name) " + "VALUES (?, ?)" ;
    
        connection.query(                          
          queryString,
          [bName],
          function(err, result) {
            if (err) throw err;

            cb(result);
          }
        );
    },
    
    // An example of objColVals would be {name: panther, sleepy: true}
    //Update a Burger
    update: function (tableInput, condition, cb) {
        let queryString = "UPDATE " + tableInput + " SET eaten = true " + "WHERE id = ?;"

        console.log(queryString);
        connection.query(queryString, condition, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    //Delete burger
    delete: function (tableInput, condition, cb) {
        let queryString = "DELETE FROM " + tableInput + " WHERE id = ?;"

        connection.query(queryString, condition, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
}


// Export the orm object for the model (burger.js).
module.exports = orm;