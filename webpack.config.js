const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');
const images = require('./webpack/images');
const fonts = require('./webpack/fonts');

const PATHS = {
	source: path.join(__dirname, 'source'),
	build: path.join(__dirname, 'build')
};

const common = merge([
	{
		entry: {
			'bundle': PATHS.source + '/bundle/bundle.js',
		},

		output: {
			path: PATHS.build,
			filename: 'js/[name].js'
		},

		plugins: [
			new HtmlWebpackPlugin({
				filename: 'index.html',
				chunks: ['bundle'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/index.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'thank.html',
				chunks: ['bundle'],
				// chunks: ['index', 'common'],
				template: PATHS.source + '/thank.pug'
			}),
			// new webpack.optimize.CommonsChunkPlugin({
			// 	name: 'common'
			// }),
			new webpack.ProvidePlugin({
				$: "jquery",
				jQuery: "jquery",
				"window.jQuery": "jquery",
				"window.$": "jquery"
			}),
			new webpack.ProvidePlugin({
				wow: 'wowjs',
				WOW: 'wowjs'
			})
		]
	},
	pug(),
	images(),
	fonts()
]);

module.exports = function(env) {
	if (env === 'production') {
		return merge([
			common,
			extractCSS(),
			uglifyJS()
		]);
	}
	if (env === 'development') {
		return merge([
			common,
			devserver(),
			sass(),
			css()
		])
	}
};