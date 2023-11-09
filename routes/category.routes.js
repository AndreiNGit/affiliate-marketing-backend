// routes/category.routes.js

const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller');

// Crează o nouă categorie
router.post('/', categoryController.createCategory);

// Obține lista tuturor categoriilor
router.get('/', categoryController.getAllCategories);

// Obține o categorie după ID
router.get('/:id', categoryController.getCategoryById);

// Actualizează o categorie după ID
router.put('/:id', categoryController.updateCategory);

// Șterge o categorie după ID
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;
