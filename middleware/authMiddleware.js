const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

function authMiddleware(req, res, next) {
    // const authHeader = req.header('Authorization');
    // const token = authHeader && authHeader.split(' ')[1]; // Luați doar tokenul, fără "Bearer"
    // console.log(token)
    // if (!token) {
    //     return res.status(401).json({ message: 'Authorization denied. Token missing.' });
    // }
    // try {
    //     const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //     console.log(decoded);
    //     req.user = decoded.user;
        next();
    // } catch (err) {
    //     res.status(401).json({ message: 'Authorization denied. Invalid token.' });
    //     console.log(err);
    // }
}

module.exports = authMiddleware;
