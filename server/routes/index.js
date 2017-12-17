import fs from 'fs'
import path from 'path'

/*
This code says look in the current directory + '/api/' appended to it (api folder), and for each file in that folder, REQUIRE each, starting from the first character of the file name (substr(0)) up to but not including the dot (substr(0, file.indexOf('.'))). This means the files are expected to have the .js extension, otherwise the app would not understand those files. After that function, pass in the routes to the app.
*/

module.exports = (app) => {
  // API routes
  fs.readdirSync(__dirname + '/api/').forEach((file) => {
    require(`./api/${file.substr(0, file.indexOf('.'))}`)(app)
  })
}
