const calculatePagination = ({ page, limit } = {}) => {
  const pageNum = Math.abs(Number(page));
  const limitNum = Math.abs(Number(limit));

  return { skip: (pageNum - 1) * limitNum, limit: limitNum };
};

module.exports = { calculatePagination };
