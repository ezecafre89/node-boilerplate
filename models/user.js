module.exports = (function() {
  'use strict';

  var connection = require('../config'),
    defaultCredentials = connection.credentials;

  /**
   * Authenticates with the given credentials
   * @param  {Object}   credentials The credentials to authenticate (user, password and securityToken)
   * @param  {Function} callback    The function to be executed once the auth is successful
   */
  var authenticate = function(credentials, callback) {
    connection.org.login(
      credentials.username,
      credentials.password +  credentials.securityToken,
      callback);
  };

  /**
   * Authenticates with the predefined credentials
   * @param  {Function} callback [description]
   */
  var defaultAuthenticate = function(callback) {
    authenticate(defaultCredentials, callback);
  };

  return {
    name: 'user',
    authenticate: authenticate,
    defaultAuthenticate: defaultAuthenticate
  };

})();
