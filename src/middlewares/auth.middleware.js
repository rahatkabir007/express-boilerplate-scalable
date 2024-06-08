function authMiddleware(req, res, next) {
    // Placeholder for authentication logic
    const token = req.headers['authorization'];
    console.log(token)
    if (token) {
        // Validate token logic here
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
}

export { authMiddleware };
