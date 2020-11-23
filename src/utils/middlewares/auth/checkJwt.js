const { config } = require('../../../config/index');
const jwt = require('jsonwebtoken');
const boom = require('@hapi/boom');

module.exports = (req, res, next) => {
    try {
        let token = req.headers.authorization;
        let finalToken;
        if(token) {
            finalToken = token.split(' ')[1];
        } else {
            throw boom.proxyAuthRequired('Bearer token is required 🐻');
        }
        const decoded = jwt.verify(finalToken, config.jwt_secret);
        req.userData = decoded;
        next();
    } catch (error) {
        if(error.message === "jwt expired") throw boom.unauthorized('Your JWT has been expired 🕐');
        throw boom.badRequest(error.message);
    }
}