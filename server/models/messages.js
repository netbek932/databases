var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.Message.sync()
      .then (() => {
        return db.Message.findAll();
      })
      .then((results) => {
        callback (null, results);
      });
  }, // a function which produces all the messages
  create: function ({username, message, roomname}, callback) {
    db.Message.sync()
      .then (() => {
        return db.Message.create({username, message, roomname});
      })
      .then (() => {
        callback();
      });
  } // a function which can be used to insert a message into the database
};
