const { matchNoticesFromDB } = require("../../helpers/utils");

const getOwnNotices = async (userId, query) => {
  const notices = await matchNoticesFromDB(
    { owner: userId },
    query.search,
    userId
  );
  return notices;
};

module.exports = { getOwnNotices };
