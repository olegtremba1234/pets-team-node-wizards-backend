const { calculatePagination } = require('./calculate-pagination');
const { generateError } = require('./generate-error');
const { renameIdFields } = require('./rename-id-field');

module.exports = {
  calculatePagination,
  generateError,
  renameIdFields,
};
