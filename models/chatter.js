module.exports = (function() {
  'use strict';

  var connection = require('../config'),
    defaultCredentials = connection.credentials;

  /**
   * Gets the chatters from the org.
   * @param  {Function} callback    The function to be executed once the auth is successful
   */
  var fetch = function(callback) {
    config.org.chatter.resource("/chatter/feeds/news/me/feed-items/?pageSize=5").retrieve(function (err, res) {
      if (!err && res) {
        var dataRenderArray = [],
          results = res.items,
          messagesHtml,
          charQuantity = 80;

        results.forEach(function (row) {
          if (row.body.text) {
            dataRenderArray.push({
              'name': row.actor.name,
              'description': (row.body.text.length > charQuantity) ? row.body.text.substr(0, charQuantity - 1) + '...' : row.body.text,
              'date': utils.getNewDate(row.createdDate),
              'type': (row.type !== 'TextPost') ? '(' + row.type + ')': ''
            });
          }
        });

       } else {
           console.log(JSON.stringify(err));
       }
    });
  };

  return {
    name: 'chatter',
    fetch: fetch
  };

})();
