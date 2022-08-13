var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.connection.query('SELECT * FROM users', (err, results) => {
      if (err) {
        callback (err, null);
      } else {
        callback (null, results);
      }
    });
  }, // a function which produces all the messages
  create: function ({ username }, callback) {
    db.connection.query('INSERT INTO users (username) VALUES (?)', [username], (err) => {
      if (err) {
        callback (err);
      } else {
        callback ();
      }
    });
  } // a function which can be used to insert a message into the database
};

