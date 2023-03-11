const { generateError } = require("../helpers/utils");

const validateBody = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    console.log("   error type:  ", error?.details[0].type);
    if (error) {
      const { message } = error.details[0];
      throw generateError({ status: 400, message });
    }
    next();
  };
};

module.exports = { validateBody };
