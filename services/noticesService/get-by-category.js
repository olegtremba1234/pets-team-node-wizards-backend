const {
  NOTICE_CATEGORIES,
  RESPONSE_ERRORS,
} = require("../../helpers/constants");
const { matchNoticesFromDB, generateError } = require("../../helpers/utils");

const getByCategory = async (category, user = {}) => {
  if (!NOTICE_CATEGORIES.includes(category)) {
    throw generateError(RESPONSE_ERRORS.wrongCategory);
  }

  const notices = await matchNoticesFromDB({ category }, user._id);

  return notices;
};

module.exports = { getByCategory };
