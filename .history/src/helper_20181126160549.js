// Helper functions
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

const root = (args) => {
  return path.join(ROOT, 'src', args);
};
const rootNode = (args) => {
  return path.join(ROOT, args);
};

const resolve = (dir) => {
  console.log('目录：' + __dirname );
  return path.join(__dirname, '..', dir);
};

module.exports = {
  root,
  rootNode,
  resolve
};
