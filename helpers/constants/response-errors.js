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
  isAlreadyAddedFavorites: {
    status: 400,
    message: "The notice is already in your favorites",
  },
  isAlreadyRemovedFavorites: {
    status: 400,
    message: "The notice has already been removed from your favorites",
  },
};

module.exports = { RESPONSE_ERRORS };
