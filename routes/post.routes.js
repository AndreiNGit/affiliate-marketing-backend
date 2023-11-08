// routes/post.routes.js

const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller');

// Route to create a new post
router.post('/', postController.createPost);

// Route to get all posts
router.get('/', postController.getAllPosts);

// Route to get a single post by id
router.get('/:id', postController.getPostById);

// Route to update a post by id
router.put('/:id', postController.updatePost);

// Route to delete a post by id
router.delete('/:id', postController.deletePost);

module.exports = router;