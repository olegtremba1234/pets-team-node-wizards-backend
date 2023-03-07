const {
  NOTICE_CATEGORIES,
  RESPONSE_ERRORS,
} = require("../../helpers/constants");
const { matchNoticesFromDB, generateError } = require("../../helpers/utils");

const getByCategory = async (category, query, user = {}) => {
  if (!NOTICE_CATEGORIES.includes(category)) {
    throw generateError(RESPONSE_ERRORS.wrongCategory);
  }

  return await matchNoticesFromDB({ category }, query.search, user._id);
};

module.exports = { getByCategory };
