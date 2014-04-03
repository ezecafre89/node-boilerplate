module.exports = (function() {
  'use strict';

  var models = require('../models');

  /**
   * [authenticate description]
   * @param  {[type]}   credentials [description]
   * @param  {Function} callback    [description]
   */
  var authenticate = function(credentials, callback) {
    models.user.authenticate(credentials, callback);
  };

  /**
   * [defaultAuthenticate description]
   * @param  {Function} callback [description]
   */
  var defaultAuthenticate = function(callback) {
    models.user.defaultAuthenticate(credentials, callback);
  };

  return {
    authenticate: authenticate,
    defaultAuthenticate: defaultAuthenticate
  };

})();