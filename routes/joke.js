module.exports = (function() {
  'use strict';

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
    remove: saveNewCar,
    list: list
  };

})();