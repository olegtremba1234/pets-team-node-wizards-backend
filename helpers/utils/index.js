const { calculatePagination } = require("./calculate-pagination");
const { generateError } = require("./generate-error");
const { renameIdField } = require("./rename-id-field");
const { matchNoticesFromDB } = require("./match-notices-from-db");

module.exports = {
  calculatePagination,
  generateError,
  renameIdField,
  matchNoticesFromDB,
};
