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

export default mongoose.model('User', schema)