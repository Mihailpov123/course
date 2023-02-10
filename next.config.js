const withSvgr = require("next-svgr");
const path = require('path')

module.exports = withSvgr({
	trailingSlash: true,
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'scss')],
	},
	env: {
		token: '5392460876:AAF-WPTSYrZPKQw4osDCzT91yzpsFdGnUKs',
		chat_id: '-656568476'
	},
	images: {
		domains: []
	}
});