//Import Dep.
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const helmet = require('helmet');
//Import Routing
const index = require('./routes/index');
const users = require('./routes/users');
const activity = require('./routes/activity');
const works = require('./routes/works');
const funding = require('./routes/funding');
const version = require('./routes/version');
const qa = require('./routes/qa');
const config = require('./config');

const app = express();

//Init Express Server
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());
//Allow CROS
app.all('*', function(req, res, next) {
    if(config.trustOrigin.includes(req.get('Origin'))) {
        res.header("Access-Control-Allow-Origin", req.get('origin'));
        res.header("Access-Control-Allow-Credentials", "true");
        res.header("Access-Control-Allow-Headers", "Content-Type");
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS,PATCH");
        next();
    }else{
        next();
    }
});
//Init Express Routing
app.use(favicon(path.join(__dirname,'public','favicon.ico')));
app.use('/static',express.static(path.join(__dirname, 'public')));
app.use('/', index);
app.use('/activity',activity);
app.use('/users', users);
app.use('/work',works);
app.use('/funding',funding);
app.use('/version',version);
app.use('/qa',qa);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res
      .status(err.status || 500)
      .send(err.message+"\n"+err.stack);
});

module.exports = app;
