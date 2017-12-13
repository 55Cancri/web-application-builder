import mongoose from 'mongoose'

const CounterSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0
  }
})

module.exports = mongoose.model('Counter', CounterSchema)
