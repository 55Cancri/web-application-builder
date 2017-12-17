// default modules

/* the way this works is that webpack ONLY compliles from the folder you tell it—in our case: "client".

· Webpack does NOT start any servers, or is not some seperate server entity. Instead, an npm script starts the server normally with either node, babel-node, or nodemon, just all your other apps, and then WITHIN the server file, webpack is started, which begins the compilation process. You can see how this works in the code below.

· In the webpack code below, it also pulls in the config files that you defined in other folders detailing the entry point folder (client), and the output (dist).

· All in all, this works exactly like you have learned that node/express servers work, except webpack is incorporated as middleware, bundling and servering the files, as opposed to express serving a pug folder.
*/
import express from 'express'
import path from 'path'
import logger from 'morgan'
import bodyParser from 'body-parser'
import fs from 'fs'
import historyApiFallback from 'connect-history-api-fallback'
import mongoose from 'mongoose'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import config from '../config/config'
import webpackConfig from '../webpack.config'

const isDev = process.env.NODE_ENV !== 'production'
const port  = process.env.PORT || 8080


// Configuration
// ================================================================================================

// Set up Mongoose
mongoose.connect(isDev ? config.db_dev : config.db, {
  useMongoClient: true
})
mongoose.Promise = global.Promise

const app = express()
app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// API routes
// to convert this => require('./routes')(app), use:
import Routes from './routes'
const routes = Routes(app)

if (isDev) {
  const compiler = webpack(webpackConfig)

  app.use(historyApiFallback({
    verbose: false
  }))

  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: path.resolve(__dirname, '../client/public'),
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  }))


  app.use(webpackHotMiddleware(compiler))
  app.use(express.static(path.resolve(__dirname, '../dist')))
} else {
  app.use(express.static(path.resolve(__dirname, '../dist')))
  app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'))
    res.end()
  })
}

app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.log(err)
  }

  console.info('>>> 🌎 Open http://0.0.0.0:%s/ in your browser.', port)
})

export default app
