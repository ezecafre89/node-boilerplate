module.exports = (function() {
  'use strict';

  var fs = require('fs'),
    path = require('path'),
    colors = require('colors');

  /**
   * Looks into the current folder for all the available routes
   * and creates the app route
   */
  var startListening = function(app) {
    fs.readdirSync(__dirname)
    .filter(function(file) {
      return (file.indexOf('.') !== 0) && (file !== 'index.js');
    })
    .forEach(function(file) {
      var route = require(path.join(__dirname, file)),
        endpoint,
        method;

      for (method in route.HTTPMapper) {
        endpoint = '/' + file.replace('.js', '');

        if (route.HTTPMapper[method].customUrl) {
          endpoint += '/' + route.HTTPMapper[method].customUrl;
        }
        if (route.HTTPMapper[method].urlParam) {
          endpoint += ':' + route.HTTPMapper[method].urlParam;
        }

        app[route.HTTPMapper[method].HTTPVerb](endpoint, route[method]);
      }

      console.log(':::Routes ready for entity '.bold + file.replace('.js', '').cyan.bold);
    });
  };

  return {
    startListening: startListening
  };

})();
