const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');

var autoprefixer = require('autoprefixer');
var precss       = require('precss');


const PATHS = {
	'app': path.join(__dirname, 'app'),
	'build': path.join(__dirname, 'build'),
	'styles': path.join(__dirname, 'app/styles')
}

const TARGET = process.env.npm_lifecycle_event;

const common = {
	entry: {
		app: ['babel-polyfill', PATHS.app]
	},
	output: {
		path: PATHS.build,
		filename: 'bundle.js'
	},

	resolve: {
		extensions: ['', '.js', '.jsx']
	},

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel?presets[]=react,presets[]=es2015',
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
			    exclude: PATHS.styles,
			    loader: 'style!css?modules&localIdentName=[name]__[local]!postcss-loader!sass?sourceMap=true'
			},
			{
			    test: /\.scss$/,
			    include: PATHS.styles,
			    loader: 'style!css!sass?sourceMap=true'
			},
			{
			    test: /\.(png|jpg|jpeg)$/,
			    loader: 'file-loader?name=./img/[name].[ext]'
			}
		],
    noParse: ['react', 'react-dom'],
	},
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
  plugins: [
    new webpack.ProvidePlugin({
      'Promise': 'bluebird',
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
  ],
	postcss: function() {
		return [autoprefixer, precss];
	}

}

if(TARGET === 'start' || !TARGET) {
	module.exports = merge(common, {
		devtool: 'eval-source-map',
		devServer: {
			contentBase: PATHS.build,
			historyApiFallback: true,
			hot: true,
			inline: true,
			progress: true,

			stats: 'errors-only',

			host: '0.0.0.0',
			port: 8082
		},
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ]
	});
}

if(TARGET === 'build') {
	module.exports = merge(common, {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({compress: { warnings: false }})
    ],
  });
}
