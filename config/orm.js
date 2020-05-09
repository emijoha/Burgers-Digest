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

    let queryString = "SELECT * FROM " + tableInput + ";";

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

    let queryString = "INSERT INTO " + table;
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

    let queryString = "UPDATE " + table;
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
    let queryString = "DELETE FROM " + table;
          queryString += " WHERE ";
          queryString += condition;
    
    console.log(queryString);

    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  // For bobs_burgers table, there are 340 burgers on it, with ids from 1 to 340
  // has come hard-coded elements, since it will only be used with the bobs burger table.
  // would have to change the '340' number id math random equation when adding future bob's burgers names
  selectRandom: function(tableInput, columnName, cb) {
    
    let id = Math.floor(Math.random() * 340) + 1;

    let queryString = "SELECT " + columnName;
        queryString += " FROM " + tableInput;
        queryString += " WHERE id = " + id;

    console.log(queryString);

    connection.query(queryString, function(err, result) {
      
      if (err) {
        throw err;
      }

      cb(result);
    })
  }

};

// Export ORM
module.exports = orm;