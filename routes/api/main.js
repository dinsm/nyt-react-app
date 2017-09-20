const router = require("express").Router();
const ArticleRoutes = require("./Article.js");

// Article routes
router.use("/articles", ArticleRoutes);

module.exports = router;