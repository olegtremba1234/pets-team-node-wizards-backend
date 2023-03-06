const { NOTICE_CATEGORIES } = require("./notice-categories");

const RESPONSE_ERRORS = {
  unauthorized: { status: 401, message: "Not authorized" },
  notFound: { status: 404, message: "Not found" },
  emailUsed: {
    status: 409,
    message: "Email in use",
  },
  notImage: { status: 400, message: "The file must be an image" },
  wrongCategory: {
    status: 400,
    message: `Category must be one of the following: [${NOTICE_CATEGORIES.join(
      ", "
    )}]`,
  },
};

module.exports = { RESPONSE_ERRORS };
