const { NoticeModel } = require("../../models");
const { generateError } = require("./generate-error");
const { RESPONSE_ERRORS, NOTICE_PROJECTION } = require("../constants");

const matchNoticesFromDB = async (matchQuery = null, userId = null) => {
  if (!matchQuery) {
    throw generateError(RESPONSE_ERRORS.notFound);
  }

  const result = await NoticeModel.aggregate()
    .match(matchQuery)
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
    .project({ ...NOTICE_PROJECTION, _id: 0 });

  return result;
};

module.exports = {
  matchNoticesFromDB,
};
