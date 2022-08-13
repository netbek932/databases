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
    models.messages.getAll((err, results) => {
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
    console.log('HERE', req.body);
    models.messages.create(req.body, (err) => {
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


// var requestHandler = function(request, response) {

//   console.log('Serving request type ' + request.method + ' for url ' + request.url);

//   var headers = defaultCorsHeaders;

//   headers['Content-Type'] = 'application/json';

//   const urlPath = url.parse(request.url).pathname;

//   if (urlPath !== '/classes/messages') {
//     response.writeHead(404, headers);
//     return response.end();
//   }
//   if (request.method === 'GET' || request.method === 'OPTIONS') {
//     statusCode = 200;
//     response.writeHead(statusCode, headers);
//     response.end(JSON.stringify(messageData));
//   } else if (request.method === 'POST') {
//     statusCode = 201;
//     response.writeHead(statusCode, headers);
//     request.on('data', (chunk) => {
//       var data = JSON.parse(chunk);
//       data.messageId = messageId++;
//       data.createdAt = new Date();
//       messageData.push(data);
//     });
//     response.end(JSON.stringify(messageData));
//   } else if (request.method === 'PUT') {
//     statusCode = 405;
//     response.writeHead(statusCode, headers);
//     response.end();
//   }
// };