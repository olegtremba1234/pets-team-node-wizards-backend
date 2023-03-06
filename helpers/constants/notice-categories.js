const CATEGORY_LIST = Object.freeze({
  sell: "sell",
  inGoodHands: "in-good-hands",
  lostFound: "lost-found",
});

const NOTICE_CATEGORIES = Object.values(CATEGORY_LIST);

module.exports = {
  CATEGORY_LIST,
  NOTICE_CATEGORIES,
};
