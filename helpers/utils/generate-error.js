const generateError = ({ status, message } = {}) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

generateError();

module.exports = { generateError };
