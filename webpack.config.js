const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCss = new ExtractTextPlugin('style-[name].css');

const cssModuleLoader = {
	loader: 'css-loader',
	options: {
		importLoaders: 1,
		modules: true,
		localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
	},
};

const cssPlainLoader = {
	loader: 'css-loader',
};


module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.js',
	},
	module: {
		rules: [
			{
				use: extractCss.extract({
					fallback: 'style-loader',
					use: cssModuleLoader,
				}),
				test: /\/module.css/,
			},
			{
				use: extractCss.extract({
					// fallback: 'style-loader',
					use: cssPlainLoader,
				}),
				test: /no-module.css/,
			},
		]
	},
	plugins: [
		extractCss,
	],
	output: {
		path: path.resolve('./dist'),
		filename: '[name].js',
	}
}
