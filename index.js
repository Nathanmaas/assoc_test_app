var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:false}));

app.use('/',require('./controllers/main.js'));
app.use('/posts', require('./controllers/posts.js'));

// app.use('/tacos', require('./controllers/posts.js'));

app.listen(3000,function(){
  console.log('Listening on port 3000!!!');
});
