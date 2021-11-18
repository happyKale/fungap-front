module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{json,ico,png,css,js,txt,svg,woff,eot,ttf}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'build/service-worker.js'
};