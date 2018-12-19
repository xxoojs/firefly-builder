const helper = require('./helper');
const Vue = require('vue');

const PluginsUtil = require(helper.resolve('until/PluginsUtil'));

Vue.use(PluginsUtil);
