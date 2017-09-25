// Require mongoose
const mongoose = require("mongoose");

// Create Schema class
const Schema = mongoose.Schema;

// Create article schema
const ArticleSchema = new Schema({

  // `title` (Title of the stored article from nytimes.com)
  title: {
    type: String,
    required: true,
    // unique: true
  },
  author: {
    type: String,
    // required: true,
    //   unique: true
  },

  // `date` (publish date and time of the article)
  date: {
    type:Date,
    default:Date.now,
    // unique: true
  },

  // url is a required string
  link: {
    type: String,
    required: true,
    // unique: true
  },
  saved:{
    type:Boolean,
    default:false
  },
  snippet:{
    type:String
  }

});

// Create the Article model with the ArticleSchema
const Article = mongoose.model("Article", ArticleSchema);

// Export the model
module.exports = Article;
