const { matchNoticesFromDB } = require("../../helpers/utils");

const getFavorites = async (userId, query) => {
  const favorites = await matchNoticesFromDB(
    {
      $expr: {
        $in: [userId, "$favoritedBy"],
      },
    },
    query.search,
    userId
  );
  return favorites;
};

module.exports = { getFavorites };
