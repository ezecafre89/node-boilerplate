module.exports = (function() {
  'use strict';

  var jsforce = require('jsforce');

  /**
   * jsforce object that represets org connection config
   * @type {object}
   */
  var org = new jsforce.Connection({
    oauth2 : {
      clientId : '3MVG98XJQQAccJQd7bjld1SskcxrnwJTTCgO7NGVUzo9q1663bWk_qs0O99IY4fneJi7luDJAuxZuT31CLEWM',
      clientSecret : '7106590838777120724',
      redirectUri : 'http://localhost:3000/auth'
    }
  });

  /**
   * org credentials object
   * @type {Object}
   */
  var credentials = {
      'username': 'ffajardo@sfdcdemos.com',
      'password': 'qwerty123OpdYwLdJnHbfuVfYCS8nbEdnh'
  };

  return {
    org: org,
    credentials: credentials
  };

})();
