import webpack from 'webpack'
import merge from 'webpack-merge'

import helpers from './helpers'
import commonConfig from './webpack.common'

module.exports = merge(commonConfig, {
  output: {
    filename: 'js/[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      },
      output: {
        comments: false
      }
    })
  ]
})
