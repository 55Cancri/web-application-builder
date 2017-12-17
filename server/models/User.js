import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
const Schema = mongoose.Schema

// TODO: add uniqueness and email validations to email field
/*
Setting index true creates an index for this field (I think), which saves the search for quickly retrieval in the future. It's something like that.
*/
const schema = new Schema({
  email: {
    type: String,
    lowercase: true,
    index: true,
    required: true
  },
  passwordHash: {
    type: String,
    required: true
  },
},{
  timestamps: true
})

/*
Here you are exporting a function that will be used in the route of the express app when mongoose find query is executed. It takes in the password entered by the user attempting to login, and then synchronously compares it to the passwordHash stored in the database. It is not doing that here (you are just defining and exporting the function), it does that where the function is used. It will return either true or false depending on the comparison by bcrypt.
*/

schema.methods.isValidPassword = function isValidPassword(password) {
  return bcrypt.compareSync(password, this.passwordHash)
}


/*
generates the json web token that will be used in the toAuthJSON directly below this one. jwt.sign() is the method that creates and encrypts json tokens.

The first parameter is the public data that is not encrypted. Anybody can take this token, run it through the decoder, and get this data. The second option is the secretkey which is used for encryption.
*/

schema.methods.generateJWT = function generateJWT() {
  return jwt.sign({
    email: this.email
  },
  process.env.JWT_SECRET
  )
}

/*
the object you will be passing to the client upon successful login. It will be used in the post login route.
*/

schema.methods.toAuthJSON = function toAuthJSON() {
  return {
    email: this.email,
    token: this.generateJWT()
  }
}


export default mongoose.model('User', schema)