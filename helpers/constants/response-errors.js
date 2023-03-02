const RESPONSE_ERRORS = {
  unauthorized: { status: 401, message: "Not authorized" },
  notFound: { status: 404, message: "Not found" },
  emailUsed: {
    status: 409,
    message: "Email in use",
  },
  notImage: { status: 400, message: "The file must be an image" },
};

module.exports = { RESPONSE_ERRORS };
