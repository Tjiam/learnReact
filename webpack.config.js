var webpack = require('webpack');
var path = require('path');

module.exports = {
		context: path.join(__dirname),
		entry:"./js/index.js",
		module: {
			loaders: [{
				test: /\.js?$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
						presets: ['react','es2015']
				}
			}]
		},
		output: {
				path: _dirname,
				filename: "./scr/bundle.js"
		}
};


// var webpack = require('webpack');
// var path = require('path');

// module.exports = {
//   context: path.join(__dirname),
//   // devtool: debug ? "inline-sourcemap" : null,
//   entry: "./src/js/index.js",
//   module: {
//     loaders: [
//       {
//         test: /\.js?$/,
//         exclude: /(node_modules)/,
//         loader: 'babel-loader',
//         query: {
//           presets: ['react', 'es2015']
//         }
//       }
//     ]
//   },
//   output: {
//     path: __dirname,
//     filename: "./src/bundle.js"
//   },

// };