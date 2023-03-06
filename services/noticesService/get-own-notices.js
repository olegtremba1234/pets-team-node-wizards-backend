const { matchNoticesFromDB } = require("../../helpers/utils");

const getOwnNotices = async (userId) => {
  const notices = await matchNoticesFromDB({ owner: userId }, userId);
  return notices;
};

module.exports = { getOwnNotices };
