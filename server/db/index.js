var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});
/* TODO this constructor takes the database name, username, then password.
 * Modify the arguments if you need to */

/* first define the data structure by giving property names and datatypes
 * See http://sequelizejs.com for other datatypes you can use besides STRING. */
var User = db.define('User', {
  username: Sequelize.STRING
}, {
  tableName: 'users',
  timestamps: false
});

var Message = db.define('Message', {
  username: Sequelize.STRING,
  message: Sequelize.STRING,
  roomname: Sequelize.STRING
}, {
  tableName: 'messages',
  timestamps: false
});

module.exports.User = User;
module.exports.Message = Message;
/* Sequelize comes with built in support for promises
 * making it easy to chain asynchronous operations together */
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


// var mysql = require('mysql2');

// // Create a database connection and export it from this file.
// // Confirm that the credentials supplied for the connection are correct.
// // On Campus at pairing stations you'll use
// // user: 'student', password: 'student'
// // On your personal computer supply the correct credentials for your mySQL account -- likely
// // user: 'root', password: ''
// // OR
// // user: 'root', password: 'some_password_you_created_at_install'


// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'chat',
// });

// connection.connect((err) => {
//   if (err) {
//     console.log('Error connecting to Db');
//     return;
//   }
//   console.log('Connection established');
// });

// // connection.end((err) => {
// //   // The connection is terminated gracefully
// //   // Ensures all remaining queries are executed
// //   // Then sends a quit packet to the MySQL server.
// // });

// module.exports.connection = connection;