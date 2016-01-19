var webpack = require('webpack');

module.exports = {
	context: __dirname + '/src',
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:3000',
		'webpack/hot/only-dev-server',
		'./index.js'
	],

	output: {
		filename: 'bundle.js',
		path: __dirname + '/dist',
	},

	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: __dirname + '/node_modules',
			loaders: ['react-hot','babel'],
		}]
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],
}