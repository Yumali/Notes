'use strict';

var lib = require('../lib/show');

module.exports.handler = function(event, context){
  lib.respond(event, function(error, response) {
    return context.done(error, response);
  });
};

/*
module.exports.handler = function(event, context, cb) {
  return cb(null, {
    message: 'Go Serverless! Your Lambda function executed successfully!'
  });
};
*/
