import Counter from '../../models/Counter'

module.exports = (app) => {
  app.post('/api/auth', function (req, res, next) {
    res.status(400).json({ errors: { global: "Invalid credentials" } })
  })
}