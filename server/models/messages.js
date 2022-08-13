var db = require('../db');

module.exports = {
  getAll: function (callback) {

    db.connection.query('SELECT * FROM messages', (err, results) => {
      if (err) {
        callback (err, null);
      } else {
        callback (null, results);
      }
    });
  }, // a function which produces all the messages
  create: function ({username, message, roomname}, callback) {
    var queryString = 'INSERT INTO messages (username, message, roomname) VALUES (?, ?, ?)';
    var queryArgs = [username, message, roomname];
    db.connection.query(queryString, queryArgs, (err, results) => {
      if (err) {
        callback (err, null);
      } else {
        console.log('RESULTS', results);
        callback (null, results);
      }
    });
  } // a function which can be used to insert a message into the database
};
