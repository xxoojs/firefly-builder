// Helper functions
const path = require('path');

const resolve = (dir) => {
  return path.join(process.cwd(), dir);
};

module.exports = {
  resolve
};
