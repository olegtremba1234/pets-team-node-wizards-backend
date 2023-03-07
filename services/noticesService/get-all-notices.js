const { matchNoticesFromDB } = require("../../helpers/utils");

const getAllNotices = async (query, user = {}) => {
  return await matchNoticesFromDB({}, query.search, user._id);
};

module.exports = { getAllNotices };
