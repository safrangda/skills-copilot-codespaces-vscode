// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Comment = require('./models/comment');

// connect to mongodb
mongoose.connect('mongodb://localhost:27017/comment');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('Connected to mongodb');
});

// set view engine
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

// render index page
app.get('/', (req, res) => {
  res.render('index');
});

// post comments
app.post('/', (req, res) => {
  Comment.create(req.body.comment, (err, newComment) => {
    if(err){
      console.log(err);
    } else {
      res.redirect('/comments');
    }
  });
});

// get comments
app.get('/comments', (req, res) => {
  Comment.find({}, (err, comments) => {
    if(err){
      console.log(err);
    } else {
      res.render('comments', {comments: comments});
    }
  });
});

// listen to port 3000
app.listen(3000, () => {
  console.log('Server started at port 3000');
});