const Joi = require('joi');

const validateUpdateBalance = (data) => {
    const schema = Joi.object({
        amount: Joi.number().integer().required(),
    });

    return schema.validate(data);
};

module.exports = { validateUpdateBalance };