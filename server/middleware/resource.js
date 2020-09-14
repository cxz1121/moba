module.exports = options => {
    return async (req, res, next) => {
        req.Model = require('../models/' + req.params.resource);
        next();
    }
}