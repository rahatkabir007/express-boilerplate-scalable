function authMiddleware(req, res, next) {
    const publicPaths = ['/register', '/login'];
    if (publicPaths.includes(req.path)) {
        return next();
    }

    const token = req.headers['authorization'];

    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.status(401).send('Unauthorized');
    }
}

export { authMiddleware };