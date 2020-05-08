// Import MySQL connection.
var connection = require("../config/connection.js");

// ---------------------------------------------------------------------------------------------------------
// MYSQL SYNTAX HELPER FUNCTIONS
// ---------------------------------------------------------------------------------------------------------

// Creates an array of question marks (as many as 'num') and turns it into a string
// Ex: printQuestionMarks(3) returns "?,?,?""
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
};

// Converts object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
};

// ---------------------------------------------------------------------------------------------------------
// ORM OBJECT WITH SQL STATEMENT FUNCTIONS
// ---------------------------------------------------------------------------------------------------------

const orm = {

  selectAll: function(tableInput, cb) {

    const queryString = "SELECT * FROM " + tableInput + ";";

    connection.query(queryString, function(err, result) {

      if (err) {
        throw err;
      }

      cb(result);

    });
  },

  // Colums: array of colum names
  // number of colums specified get turned into needed number of question marks via printQuestionMarks helper function
  insertOne: function(table, columns, values, cb) {

    const queryString = "INSERT INTO " + table;
          queryString += " (";
          queryString += columns.toString();
          queryString += ") ";
          queryString += "VALUES (";
          queryString += printQuestionMarks(values.length);
          queryString += ") ";
    
    console.log(queryString);

    connection.query(queryString, values, function(err, result) {

      if (err) {
        throw err;
      }

      cb(result);

    });
  },

  // objColVals ex: {col1: val1, col2: val2}
  // This obj gets turned to sql syntax via objToSql helper function
  updateOne: function(table, objColVals, condition, cb) {

    const queryString = "UPDATE " + table;
          queryString += " SET ";
          queryString += objToSql(objColVals);
          queryString += " WHERE ";
          queryString += condition;

    console.log(queryString);

    connection.query(queryString, function(err, result) {

      if (err) {
        throw err;
      }

      cb(result);

    });
  },

  deleteOne: function(table, condition, cb) {
    const queryString = "DELETE FROM " + table;
          queryString += "WHERE ";
          queryString += condition;
    
    console.log(queryString);

    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }

      cb(res);
    });
  },

};

// Export ORM
module.exports = orm;