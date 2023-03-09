const { NoticeModel } = require("../../models");

const matchNoticesFromDB = async (
  matchQuery = {},
  searchQuery = null,
  userId = null
) => {
  const aggregateQuery = {
    ...matchQuery,
  };

  if (searchQuery) {
    aggregateQuery.$text = { $search: searchQuery };
  }

  const result = await NoticeModel.aggregate()
    .match(aggregateQuery)
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
    .addFields({
      isOwn: {
        $cond: {
          if: { $eq: ["$owner", userId] },
          then: true,
          else: false,
        },
      },
    })
    .addFields({ id: "$_id" })
    .project({ __v: 0, owner: 0, favoritedBy: 0, _id: 0 });

  return result;
};

module.exports = {
  matchNoticesFromDB,
};
