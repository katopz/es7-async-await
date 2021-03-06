import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

const file = name => path.resolve(__dirname, name);

module.exports = {
	context: file('src'),
	entry: './index.js',

	output: {
		path: file('build'),
		publicPath: '/',
		filename: 'bundle.js'
	},

	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: 'babel'
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			minify: { collapseWhitespace: true }
		})
	],

	node: false,

	devtool: 'source-map',

	devServer: {
		port: process.env.PORT || 8080,
		publicPath: '/',
		contentBase: './src',
		historyApiFallback: true
	}
};
