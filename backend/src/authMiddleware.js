const jwt = require('jsonwebtoken');
const secretKey = "secretkey";

function verifyToken(req, res, next) {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid token' });
        }

        req.user = decoded; // Store the decoded user information in the request object
        next();
    });
}

module.exports = { verifyToken };