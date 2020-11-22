const mongoose = require('mongoose')
const app = require('./app')
const morgan = require('morgan')

const config = require('./config/config')

app.listen(config.port, () => {
  console.log('Escuchando puerto: ' + config.port)
})
app.use(morgan('dev'))

mongoose.connect(config.db, (err, res) => {
  if (err) throw err
  console.log('Base de datos online')
})
