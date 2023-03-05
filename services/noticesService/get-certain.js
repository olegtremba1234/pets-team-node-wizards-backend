const { NoticeModel } = require("../../models");
const mongoose = require("mongoose");

const getCertain = async (noticeId, userId) => {
  const [notice] = await NoticeModel.aggregate([
    {
      $match: { _id: { $eq: new mongoose.Types.ObjectId(noticeId) } },
    },
  ])
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
  return notice;
};

module.exports = { getCertain };
