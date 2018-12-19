const helper = require('./helper');
const Vue = require('vue');

const PluginsUtil = require(helper.resolve('until/index'));

Vue.use(PluginsUtil);
