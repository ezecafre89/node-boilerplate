module.exports = (function() {
  'use strict';

  var Services = require('../services/user'),
    check = require('validator').check,
    sanitize = require('validator').sanitize;


  /**
   * The object mapper to know which HTTP Verb will git each method.
   * @type {Object}
   */
  var HTTPMapper = {
    create: { HTTPVerb: 'post' },
    update: { HTTPVerb: 'put', urlParam: 'id' },
    remove: { HTTPVerb: 'delete', urlParam: 'id' },
    list: { HTTPVerb: 'get', urlParam: 'id' },
    auth: { HTTPVerb: 'post', customUrl: 'auth' }
  };

  /**
   * [auth description]
   * @param  {[type]} req [description]
   * @param  {[type]} res [description]
   */
  var auth = function(req, res) {
    var credentials = {
      username: sanitize(req.body.username).trim(),
      password: sanitize(req.body.password).xss().trim(),
      securityToken: sanitize(req.body.securityToken).xss().trim()
    };

    try {
      check(credentials.username).notEmpty();
      check(credentials.password).notEmpty();
      check(credentials.securityToken).notEmpty();
    } catch(e) {
      console.log('req: /user/auth --'.red + ' (400)'.red.bold + ' All the params are mandatory'.red);
      return res.json(400, {
        message: 'All the params are mandatory',
        error: e
      });
    }

    Services.authenticate(credentials, function(err, resp) {
      if (!err) {
        var oauth = resp;
         console.log('req: /user/auth --'.green + ' (200)'.green.bold + ' Authentication Succed'.green, err);
        return res.json(200, {
          message: 'OK',
          result: resp
        });
      } else {
        console.log('req: /user/auth --'.red + ' (400)'.red.bold + ' Authentication failed'.red, err);
        return res.json(400, {
          message: 'Authentication Failed',
          error: e
        });
      }
    });
  };

  /**
   * [remove description]
   * @param  {[type]} req [description]
   * @param  {[type]} res [description]
   */
  var remove = function(req, res) {
    res.send(200);
  };

  /**
   * [create description]
   * @param  {[type]} req [description]
   * @param  {[type]} res [description]
   */
  var create = function(req, res) {
    res.send(200);
  };

  /**
   * [update description]
   * @param  {[type]} req [description]
   * @param  {[type]} res [description]
   */
  var update = function(req, res) {
    res.send(200);
  };

 /**
  * [list description]
  * @param  {[type]} req [description]
  * @param  {[type]} res [description]
  */
  var list = function(req, res) {
    res.send(200);
  };

  return {
    create: create,
    update: update,
    remove: remove,
    list: list,
    auth: auth,
    HTTPMapper: HTTPMapper
  };

})();
