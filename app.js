const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');

const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




// =============================================DATA BASE MANGO ATLAS============================================= //
const dbUrl  = `mongodb+srv://blog_db:rGpQ7045ZHJHbJrR@cluster0-z4sb2.mongodb.net/cinema_db?retryWrites=true`

 try {
    if( process.env.ENV === 'Test' ){
        console.log("Test DB");
        const db = mongoose.connect(dbUrl, {useNewUrlParser:true})
    }
    else {
        console.log("Success connect to Database ==Cinema_db");
        const db = mongoose.connect(dbUrl, {useNewUrlParser:true})
    }
}
catch(err){
    console.log("CATCH",err);
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// =============================================MAINPAGE_VIDEO_CONTENT=============================================

const video = require('./models/videoModel');
const videoRoute = require('./routes/videoRoute')(video);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/', videoRoute);

// ===============================================================================================================


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

module.exports = app;
