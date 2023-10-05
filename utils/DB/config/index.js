const deepmerge = require('deepmerge');
const configDefault = require('./config.default');
const configLocal = require('./config.local');

const config = deepmerge(configDefault, configLocal || {});
const frontendDb = config.frontendDb;
const backendDb = config.backendDb;

module.exports = { frontendDb, backendDb };