module.exports = (function() {
  'use strict';

  var jsforce = require('jsforce');

  /**
   * jsforce object that represets org connection config
   * @type {object}
   */
  var org = new jsforce.Connection({
    oauth2 : {
      clientId : 'yourClientID',
      clientSecret : 'yourClientSecret',
      redirectUri : 'yourRedirectUri'
    }
  });

  /**
   * org credentials object
   * @type {Object}
   */
  var credentials = {
      'username': 'someUsername',
      'password': 'somePassword'
  };

  return {
    org: org,
    credentials: credentials
  };

})();
