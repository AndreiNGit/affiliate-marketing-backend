// routes/comment.routes.js

const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment.controller');

// Route to create a new comment
router.post('/', commentController.createComment);

// Route to get all comments
router.get('/', commentController.getAllComments);

// Route to get a single comment by id
router.get('/:id', commentController.getCommentById);

// Route to update a comment by id
router.put('/:id', commentController.updateComment);

// Route to delete a comment by id
router.delete('/:id', commentController.deleteComment);

module.exports = router;