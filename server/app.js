//Import Dep.
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//Import Routing
var index = require('./routes/index');
var users = require('./routes/users');
var activity = require('./routes/activity');
var works = require('./routes/works');
var funding = require('./routes/funding');

var app = express();

//Init Express Server
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/static',express.static(path.join(__dirname, 'public')));
//Init Express Routing
app.use('/', index);
app.use('/activity',activity);
app.use('/users', users);
app.use('/work',works);
app.use('/funding',funding);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log(err);
  res.send(err);
});

module.exports = app;