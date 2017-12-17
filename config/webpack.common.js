import webpack from 'webpack'
import autoprefixer from 'autoprefixer'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import FriendlyErrorsPlugin from 'friendly-errors-webpack-plugin'


import helpers from './helpers'

const NODE_ENV = process.env.NODE_ENV
const isProd = NODE_ENV === 'production'

module.exports = {
  entry: {
    'app': [
      helpers.root('client/app/index.jsx')
    ]
  },

  output: {
    path: helpers.root('dist'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.scss', '.html'],
    alias: {
      'app': 'client/app'
    }
  },
  stats: {
    colors: true,
    modules: true,
    reasons: true,
    errorDetails: true
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      // absolutely necessary for font-awesome
      // you NEED the file-loader & css-loader modules
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?.*$|$)/,
        loader: 'file-loader'
      },
      // JS files
      {
        test: /\.jsx?$/,
        include: helpers.root('client'),
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            // options: {
            //   "presets": [["env", {"modules": false}], "react"]
            // }
          }
        ]
      },

      // SCSS files
      // or test: /(\.scss|\.sass)$/,
      // or test: /.(scss|sass)$/,
      // or test: /.s[ac]ss$/,
      // verdict: none of the above required!
      {
        test: /.sass$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                'sourceMap': true,
                'importLoaders': 1
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [
                  autoprefixer
                ]
              }
            },
            'sass-loader'
          ]
        })
      }
    ]
  },

  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),

    new FriendlyErrorsPlugin({
      clearConsole: false
    }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV)
      }
    }),

    new HtmlWebpackPlugin({
      template: helpers.root('client/public/index.html'),
      inject: 'body'
    }),

    new ExtractTextPlugin({
      filename: 'css/[name].[hash].css',
      disable: !isProd
    }),

    new CopyWebpackPlugin([{
      from: helpers.root('client/public')
    }])
  ]
}
