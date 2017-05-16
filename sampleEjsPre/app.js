var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');//引入session模块

var index = require('./routes/index');
//var users = require('./routes/users');

//其他页面路劲引用
var subform = require('./routes/subform');
var usesession = require('./routes/usesession');
var usecookies = require('./routes/usecookies');
var usecrypto = require('./routes/usecrypto');





var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
//这里传入了一个密钥加session id
app.use(cookieParser('Wilson'));
//使用靠就这个中间件
app.use(session({ secret: 'wilson'}));




app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
//app.use('/users', users);

//新添路径变为路由

app.use('/subform', subform);
app.use('/usesession', usesession);
app.use('/usecookies', usecookies);
app.use('/usecrypto', usecrypto);


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

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



//开始监听
app.listen(8100,function(){
	console.log('module   start');
});

module.exports = app;
