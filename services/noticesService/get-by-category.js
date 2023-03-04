const { NoticeModel } = require("../../models");

const getByCategory = async (category = null, userId = null) => {
  const notices = await NoticeModel.aggregate()
    .match({ category })
    .addFields({
      isFavorite: {
        $cond: {
          if: {
            $first: {
              $filter: {
                input: "$favoritedBy",
                as: "favoritedUserId",
                cond: {
                  $eq: [
                    { $convert: { input: "$$favoritedUserId", to: "string" } },
                    userId,
                  ],
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

module.exports = { getByCategory };
