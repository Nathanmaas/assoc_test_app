var db = require('../models');
var express = require('express');
var router = express.Router();



// GET / - homepage
router.get('/', function(req, res){
  // res.send('posts home page!!');
  db.author.findAll().then(function(authors){
    db.post.findAll().then(function(posts){
      res.render('posts/index',{
        myPosts:posts,
        authorList:authors
      });
    });
  });
});

module.exports = router;