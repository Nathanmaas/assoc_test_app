var db = require('../models');
var express = require('express');
var router = express.Router();

// http://localhost:3000/posts
// GET /posts - post index (list all posts)
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

// POST /posts - create a new post
router.post('/',function(req, res){
  db.author.findById(req.body.author).then(function(author){
    author.createPost({
      title:req.body.title,
      content:req.body.content
    }).then(function(post){
      res.redirect('/posts');
    });
    // res.send(author);
  });
  // res.send(req.body)
});

module.exports = router;