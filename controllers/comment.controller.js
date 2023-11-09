// controllers/comment.controller.js

const CommentService = require('../services/comment.service');

const CommentController = {
  createComment: async (req, res) => {
    try {
      const newComment = await CommentService.createComment(req.body);
      res.status(201).json(newComment);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getAllComments: async (req, res) => {
    try {
      const comments = await CommentService.getAllComments();
      res.status(200).json(comments);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getCommentById: async (req, res) => {
    try {
      const comment = await CommentService.getCommentById(req.params.id);
      res.status(200).json(comment);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  updateComment: async (req, res) => {
    try {
      const updatedComment = await CommentService.updateComment(req.params.id, req.body);
      res.status(200).json(updatedComment);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  deleteComment: async (req, res) => {
    try {
      await CommentService.deleteComment(req.params.id);
      res.status(200).json({ message: "Comment successfully deleted" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = CommentController;
