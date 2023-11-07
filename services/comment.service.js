// services/comment.service.js

const CommentModel = require('../models/comment.model');

const CommentService = {
  createComment: async (data) => {
    const { content, author, author_ip, post_id, comment_parent } = data;
    // Validează datele de intrare după necesități
    if (!content) {
      throw new Error("Conținutul comentariului nu poate fi gol.");
    }
    // Presupunem că existența postului și a comentariului părinte a fost deja validată.
    return await CommentModel.create({ content, author, author_ip, post_id, comment_parent });
  },

  getAllComments: async () => {
    return await CommentModel.findAll();
  },

  getCommentById: async (id) => {
    const comment = await CommentModel.findById(id);
    if (!comment) {
      throw new Error("Comentariul nu a fost găsit.");
    }
    return comment;
  },

  updateComment: async (id, data) => {
    const { content, approved } = data;
    // Validează datele de intrare după necesități
    if (!content) {
      throw new Error("Conținutul comentariului nu poate fi gol.");
    }
    const updatedComment = await CommentModel.update(id, { content, approved });
    if (!updatedComment) {
      throw new Error("Comentariul nu a fost găsit sau actualizat.");
    }
    return updatedComment;
  },

  deleteComment: async (id) => {
    const deletedComment = await CommentModel.delete(id);
    if (!deletedComment) {
      throw new Error("Comentariul nu a fost găsit sau șters.");
    }
    return deletedComment;
  },
};

module.exports = CommentService;