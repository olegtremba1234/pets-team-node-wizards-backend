const { matchNoticesFromDB } = require("../../helpers/utils");

const getFavorites = async (userId) => {
  const favorites = await matchNoticesFromDB(
    {
      $expr: {
        $in: [userId, "$favoritedBy"],
      },
    },
    userId
  );
  return favorites;
};

module.exports = { getFavorites };
