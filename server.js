var express = require('express'),
    router = require('./routes'),
    http = require('http'),
    path = require('path'),
    app = express();

/**
 * Log errors on server
 * @param err {object} The error to log
 * @param req {object} The HTTP request object.
 * @param res {object} The HTTP response object
 * @param next {object} The next handler in the chain to handle this error
 */
function logErrors(err, req, res, next) {
  console.error(err.stack);
  next(err);
}

/**
 * Default error handler for this server.
 * @param err {object} The error to log
 * @param req {object} The HTTP request object.
 * @param res {object} The HTTP response object
 * @param next {object} The next handler in the chain to handle this error
 */
function errorHandler(err, req, res, next) {
  res.json(500, {
    message: 'Server cannot process requests at this moment',
    error: err
  });
}

/**
 * Server configuration.
 */
app.configure(function() {
  app.set('port', process.env.PORT || 3000);
  app.use(express.logger('dev'));

  app.use(express.cookieParser('4ppl1c4t10nS3cr3t'));
  app.use(express.bodyParser());
  app.use(express.session());
  app.use(express.methodOverride());

  app.use(app.router);

  app.use(logErrors);
  app.use(errorHandler);
});

/**
 * Allowing CORS
 */
app.all('*', function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

/**
 * Starting Server routing
 */
 router.startListening(app);

/**
 * Server initialization
 */
http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port '.green + app.get('port').toString().green);
});
