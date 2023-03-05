const { NoticeModel } = require("../../models");

const getFavorites = async (userId) => {
  const favorites = await NoticeModel.aggregate()
    .match({
      $expr: {
        $in: [userId, "$favoritedBy"],
      },
    })
    .addFields({
      isFavorite: {
        $cond: {
          if: {
            $first: {
              $filter: {
                input: "$favoritedBy",
                as: "favoritedUserId",
                cond: {
                  $eq: ["$$favoritedUserId", userId],
                },
              },
            },
          },
          then: true,
          else: false,
        },
      },
    })
    .addFields({ id: "$_id" })
    .project({ owner: 0, favoritedBy: 0, __v: 0, _id: 0 });
  return favorites;
};

module.exports = { getFavorites };
