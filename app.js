const express = require('express');
const bodyParser = require('body-parser');

// Import routes
const categoryRoutes = require('./routes/category.routes');
const productRoutes = require('./routes/product.routes');
const categoryProductRoutes = require('./routes/categoryProduct.routes');
const subscriberRoutes = require('./routes/subscriber.routes');
const advertiserRoutes = require('./routes/advertiser.routes');
const advertiserProductRoutes = require('./routes/advertiserProduct.routes');
const userRoutes = require('./routes/user.routes');
const postRoutes = require('./routes/post.routes');
const commentRoutes = require('./routes/comment.routes');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Define routes
app.use('/api/users', userRoutes);

app.use(authMiddleware)

app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/category-products', categoryProductRoutes);
app.use('/api/subscribers', subscriberRoutes);
app.use('/api/advertisers', advertiserRoutes);
app.use('/api/advertiser-products', advertiserProductRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Set the port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});