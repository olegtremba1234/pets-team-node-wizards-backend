const { generateError } = require('../helpers');

const validateBody = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      const { message } = error.details[0];
      throw generateError({ status: 400, message });
    }
    next();
  };
};

module.exports = { validateBody };
