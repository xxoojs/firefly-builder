const helper = require('./helper');
const Vue = require(helper.resolve('node_modules/vue'));

const PluginsUtil = require(helper.resolve('src/until/PluginsUtil'));

exports.extend = () => {
  Vue.use(PluginsUtil);
};
