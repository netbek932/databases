var db = require('../db');

module.exports = {
  getAll: function (callback) {
    // db.connection.query('SELECT * FROM users', (err, results) => {
    //   if (err) {
    //     callback (err, null);
    //   } else {
    //     callback (null, results);
    //   }
    // });
    db.User.sync()
      .then (() => {
        return db.User.findAll();
      })
      .then((results) => {
        callback (null, results);
      });
  }, // a function which produces all the messages
  create: function ({ username }, callback) {
    // db.connection.query('INSERT INTO users (username) VALUES (?)', [username], (err) => {
    //   if (err) {
    //     callback (err);
    //   } else {
    //     callback ();
    //   }
    // });
    db.User.sync()
      .then (() => {
        return db.User.create({username});
      })
      .then (() => {
        callback();
      });
  } // a function which can be used to insert a message into the database
};

// User.sync()
//   .then(function() {
//     // Now instantiate an object and save it:
//     return User.create({username: 'Jean Valjean'});
//   })
//   .then(function() {
//     // Retrieve objects from the database:
//     return User.findAll({ where: {username: 'Jean Valjean'} });
//   })
//   .then(function(users) {
//     users.forEach(function(user) {
//       console.log(user.username + ' exists');
//     });
//     db.close();
//   })
//   .catch(function(err) {
//     // Handle any error in the chain
//     console.error(err);
//     db.close();
//   });
