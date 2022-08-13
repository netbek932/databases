var models = require('../models');
var statusCode;

var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept, authorization',
  'access-control-max-age': 10 // Seconds.
};

var headers = defaultCorsHeaders;

headers['Content-Type'] = 'application/json';

module.exports = {
  get: function (req, res) {
    models.users.getAll((err, results) => {
      statusCode = 200;
      if (err) {
        res.end(err);
      } else {
        res.writeHead(statusCode, headers);
        res.end(JSON.stringify(results));
      }
    });
  }, // a function which handles a get request for all messages

  post: function (req, res) {
    console.log('USERS POST', req.body);
    models.users.create(req.body, (err) => {
      if (err) {
        res.end(err);
      } else {
        statusCode = 201;
        res.writeHead(statusCode, headers);
        res.end();
      }
    });

  } // a function which handles posting a message to the database
};