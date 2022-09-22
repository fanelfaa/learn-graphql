// module.exports = function override(config, env) {
// 	//do stuff with the webpack config...
// 	return config
// }
const { aliasWebpack, aliasJest } = require('react-app-alias')

const options = {} // default is empty for most cases

module.exports = aliasWebpack(options)
module.exports.jest = aliasJest(options)
