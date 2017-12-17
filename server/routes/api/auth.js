import User from '../../models/User'
import bcrypt from 'bcrypt'

/*
Again, you are employing destructuring here. Within the req.body is the form data in an object. So { credentials } is short for { email: ***@*.com, password: **** }. Then, in the mongoose find method, you can search properties of the credentials object using credentials.email.
*/

module.exports = (app) => {
  app.post('/api/auth', function (req, res, next) {
    const { credentials } = req.body
    User.findOne({ email: credentials.email })
    .then(user => {
      if (user) {
        res.json({ success: true })
      } else {
        res.status(400).json({ errors: { global: "Invalid credentials."}})
      }
    })
  })
}