import User from '../../models/User'
import bcrypt from 'bcrypt'

/*
Again, you are employing destructuring here. Within the req.body is the form data in an object. So { credentials } is short for { email: ***@*.com, password: **** }. Then, in the mongoose find method, you can search properties of the credentials object using credentials.email.

Also, the mongoose query is a little more complex than what you are used to. For one thing, when you import the User model, now you are not just importing the schema, but also any methods (functions) defined and exported from it. So mongoose finds a user based on their email in the destructured credentials object, returns its findings in the user variable, then, if the user is found and if the isValidPassword function defined in the schema returns true, THEN it sends the user object back to the client. Also, the isValidPassword takes a password as a parameter. You can retrieve that password as a property from the destructured credentials object.

If the user is found through email and the passwords match, the other function that was defined in the schema is used: toAuth().
*/

module.exports = (app) => {
  app.post('/api/auth', function (req, res, next) {
    const { credentials } = req.body
    User.findOne({ email: credentials.email })
    .then(user => {
      if (user && user.isValidPassword(credentials.password)) {
        res.json({ user: user.toAuthJSON() })
      } else {
        res.status(400).json({ errors: { global: "Invalid credentials."}})
      }
    })
  })
}