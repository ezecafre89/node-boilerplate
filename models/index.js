module.exports = (function() {
  'use strict';

  var fs = require('fs'),
    path = require('path'),
    models = {};

  fs.readdirSync(__dirname)
    .filter(function(file) {
      return (file.indexOf('.') !== 0) && (file !== 'index.js');
    })
    .forEach(function(file) {
      var model = require(path.join(__dirname, file));
      models[model.name] = model;
    });

  return models;

})();
