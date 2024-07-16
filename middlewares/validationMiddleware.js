const { validateUpdateBalance } = require('../utils/validation');

const validationMiddleware = (req, res, next) => {
    const { error } = validateUpdateBalance(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

module.exports = validationMiddleware;