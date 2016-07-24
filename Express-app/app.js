var express = require('express');  // F.W
var path = require('path');  // core-module
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


var mongoose=require("mongoose");
//var uri="mongodb://nag:nagnag@ds027165.mlab.com:27165/mydb";
var uri="mongodb://localhost:27017/pm";
mongoose.connect(uri);

var products = require('./routes/products');

var app = express();

//------------------------------------------------


// configuration
//----------------

/*
 *  app.set(key,value) , app.get('key');
 *  
 *  e.g
 *  
 *  app.set('port',3000);
 *  
 *  or
 *  
 *  app.set('port',process.env.PORT || 3000);
 * 
 */


//-----------------------------------------------

//app.set('env', 'development');  // development | test | stage | preview | production
//app.set('view cache', false);
//app.set('trust proxy', true);
//
//app.set('jsonp callback name','cb');  // JSONP
//
////app.set('case sensitive routing', true);
//app.enable('case sensitive routing');

/*
 *  url-1 : /users
 *  url-2 : /users/
 * 
 */

//app.enable('strict routing');
//app.disable('x-powered-by');
//
//app.set('etag',function(body,encoding){
//	return '';
//});

// url : /path?param1=123&param2=3434

/*
 * req.params.param1
 * 
 */

//app.set('query parser','simple');
//app.set('query parser',customQueryParsingFunction);



//------------------------------------------------


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(methodOverride('_method'));


app.use('/products',products);

//app.get('/users',function(req,res){
//	res.send('/users');
//});
//app.get('/users/',function(req,res){
//	res.send('/users/');
//});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
