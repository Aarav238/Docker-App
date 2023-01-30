const express = require("express");

const postController = require("../controllers/postController.js")


const protect = require("../middleware/authMiddleware.js")

const router = express.Router();

router.route("/").get(postController.getAllPosts).post(protect,postController.createPost)

router.route("/:id").get(postController.getOnePost).patch(postController.updatePost).delete(postController.deletePost)


module.exports = router;