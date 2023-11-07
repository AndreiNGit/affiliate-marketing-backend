// controllers/post.controller.js

const PostService = require('../services/post.service');

const PostController = {
  createPost: async (req, res) => {
    try {
      const newPost = await PostService.createPost(req.body);
      res.status(201).json(newPost);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getAllPosts: async (req, res) => {
    try {
      const posts = await PostService.getAllPosts();
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getPostById: async (req, res) => {
    try {
      const post = await PostService.getPostById(req.params.id);
      res.status(200).json(post);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  updatePost: async (req, res) => {
    try {
      const updatedPost = await PostService.updatePost(req.params.id, req.body);
      res.status(200).json(updatedPost);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  deletePost: async (req, res) => {
    try {
      await PostService.deletePost(req.params.id);
      res.status(200).json({ message: "Post successfully deleted" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = PostController;
