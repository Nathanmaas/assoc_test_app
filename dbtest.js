var db = require('./models');

// db.author.findAll().then(function(authors){
//   console.log(authors.length);
// });

// db.author.findAll().then(function(authors){
//   authors.forEach(function(author){
//   console.log(author.get());
//   console.log('-----');
//     });
// });

// db.author.find().then(function(author){
//   console.log(author.get());
// });

// Find One Author - get posts
// db.author.find({where:{name:'Lenny'}}).then(function(author){
//   author.createPost({
//           title: 'Second post',
//           content: 'Second post content.'
//           }).then(function(post){
//           console.log(post.get());

//           })
//           console.log(author.get());
// });

//  db.author.find({where:{name:'Lenny'}}).then(function(author){
//   console.log(author.get());
//   author.getPosts().then(function(posts){
//     console.log(posts);

//   });
// });

//  db.author.find({where:{name:'Lenny'}}).then(function(author){
//   console.log(author.get());
//   author.getPosts().then(function(posts){
//     console.log('post count:', posts.length);
//     posts.forEach(function(posts){
//       console.log('-----');
//       console.log(posts.get());
//     })
//   });
// });

//  db.author.findAll().then(function(authors){
//   authors.forEach(function(author){
//   author.getPosts().then(function(posts){
//     console.log(author.get());
//     console.log('post count', posts.length)
//     console.log('-----');
//       });
//     });
//     console.log('all done??');
// });

 db.author.findAll({
  include:[db.post]
 }).then(function(authors){
  authors.forEach(function(author){
    var cleanAuthor = author.get();
    cleanAuthor.posts = cleanAuthor.posts.map(function(post){
      return post.get();
    });
    console.log(cleanAuthor);
      });
    console.log('all done??');
  }).catch(function(err){
  }).finally(function(){
    console.log('yay done!!');
  })

// Lenny
// var db = require('./models');

//FIND ONE AUTHOR
// db.author.find({where:{name:'Brian'}}).then(function(author){
//   console.log(author.get());
// });

//LIST ALL AUTHORS
// db.author.findAll().then(function(authors){
//   // console.log(authors.length);
//   authors.forEach(function(author){
//     console.log(author.get());
//     console.log('------');
//   });
// });

//CREATE POST FOR AUTHOR
// db.author.find({where:{name:'Brian'}}).then(function(author){
//   author.createPost({
//     title:'Second post',
//     content:'Second post content.'
//   }).then(function(post){
//     console.log(post.get());
//   })
//   console.log(author.get());
// });

//FIND ONE AUTHOR - get posts
// db.author.find({where:{name:'Brian'}}).then(function(author){
//   console.log(author.get());
//   author.getPosts().then(function(posts){
//     console.log('post count:',posts.length);
//     posts.forEach(function(post){
//       console.log('-----');
//       console.log(post.get());
//     })
//   });
// });

//LOAD ALL POSTS (getPosts)
// db.author.findAll().then(function(authors){
//   // console.log(authors.length);
//   authors.forEach(function(author){
    // author.getPosts().then(function(posts){
//       console.log(author.get());
//       console.log('post count', posts.length)
//       console.log('------');
//     });
//   });
//   console.log('all done??');
// });



//LOAD ALL POSTS (getPosts)
//include:[{model:db.post,where:{id:1}}]
// db.author.findAll({
//   include:[db.post]
// }).then(function(authors){
//   // console.log(authors.length);
//   authors.forEach(function(author){
//     var cleanAuthor = author.get();
//     cleanAuthor.posts = cleanAuthor.posts.map(function(post){
//       return post.get();
//     });
//     console.log(cleanAuthor);
//   });
//   console.log('all done??');
// }).catch(function(err){
//   console.log('error',err);
// }).finally(function(){
//   console.log('yay done!!');
// })










