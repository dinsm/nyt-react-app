import axios from 'axios';

export default{
  getArticles: function(query,startYear,endYear){
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=4da147a41c8743f38893727d88a8c693&",{
      params:{
        q:query,
        begin_date:startYear+'0101',
        end_date:endYear+'1231'
      }
    });
  },
  getSavedArticles: function(){
    return axios.get("/api/saved");
  },
  saveArticle: function(articleData){
    return axios.post("/api/saved",articleData);
  },
  deleteArticle: function(id){
    return axios.post("/api/delete",{
      params:{
        articleId:id
      }
    });
  }
};

// getSavedArticles: function() {
//     return axios.get("/api/articles/");
// },
// getSavedArticle: function(id) {
//     return axios.get("/api/articles/" + id);
// },
// deleteSavedArticle: function(id) {
//     return axios.delete("/api/articles/" + id);
// },
// saveArticle: function(articleData) {
//     return axios.post("/api/articles", articleData);
// }
// };

