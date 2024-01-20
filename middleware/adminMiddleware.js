const adminAuthMiddleware = (req, res, next) => {
    // // Presupunem că req.user a fost deja setat de middleware-ul de autentificare anterior
    // if (!req.user) {
    //     return res.status(401).json({ message: 'Authorization denied. User not authenticated.' });
    // }

    // if (!req.user.is_admin) {
    //     return res.status(403).json({ message: 'Authorization denied. Admin rights required.' });
    // }

    next();
};

module.exports = adminAuthMiddleware;