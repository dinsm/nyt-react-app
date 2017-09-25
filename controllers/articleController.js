//require the models
const Article = require("../models/Article.js");

//export an object with key/value pairs of all the mongoose queries
//basic CRUD operations
module.exports = {
  saveArticle: function(req,res){
    console.log(req.body);
    // res.send("I'm a saved article");
    const articleData = {
      title: req.body.headline,
      link: req.body.url
    }

    let entry = new Article(articleData);

    entry.save(function(err, doc) {
      // Log any errors
      if (err) {
        console.log(err);
      }
      // Or log the doc
      else {
        console.log(doc);
      }
    });
    //mongoose query to save article goes here
  },
  deleteArticle: function(req,res){
    console.log(req.body.params.articleId);
    Article.findByIdAndRemove({_id:req.body.params.articleId}, (err,article) =>{
      let response = {
        message:"Successfully deleted article",
        id: article._id
      };
      res.status(200).send(response);
    });
  },
  allSavedArticles: function(req,res){
    console.log(req.body);
    // res.send("Here's all the saved articles from the back end");
    Article.find({}, function(error, data) {
      console.log(error || data);

      if (error) {
        res.send(error);
      }
      // Or send the data to the browser
      else {
        res.json(data);
      }
    })
  }
};
