// services/post.service.js

const PostModel = require('../models/post.model');

const PostService = {
  createPost: async (data) => {
    const { title, slug, content, description, is_draft, is_private, password, author } = data;
    if (!title || !content) {
      throw new Error("Titlul și conținutul sunt obligatorii pentru un post.");
    }
    // Presupunem că autorul a fost deja validat și există
    return await PostModel.create({ title, slug, content, description, is_draft, is_private, password, author });
  },

  getAllPosts: async () => {
    return await PostModel.findAll();
  },

  getPostById: async (id) => {
    const post = await PostModel.findById(id);
    if (!post) {
      throw new Error("Postarea nu a fost găsită.");
    }
    return post;
  },

  updatePost: async (id, data) => {
    const { title, slug, content, description, is_draft, is_private, password, author } = data;
    const updatedPost = await PostModel.update(id, { title, slug, content, description, is_draft, is_private, password, author });
    if (!updatedPost) {
      throw new Error("Postarea nu a fost găsită sau actualizată.");
    }
    return updatedPost;
  },

  deletePost: async (id) => {
    const deletedPost = await PostModel.delete(id);
    if (!deletedPost) {
      throw new Error("Postarea nu a fost găsită sau ștearsă.");
    }
    return deletedPost;
  },
};

module.exports = PostService;
