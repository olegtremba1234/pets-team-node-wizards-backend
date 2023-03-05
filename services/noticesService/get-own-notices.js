const { NoticeModel } = require("../../models");

const getOwnNotices = async (userId) => {
  const notices = await NoticeModel.aggregate()
    .match({ owner: userId })
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
    .project({ owner: 0, favoritedBy: 0, __v: 0 });
  return notices;
};

module.exports = { getOwnNotices };
