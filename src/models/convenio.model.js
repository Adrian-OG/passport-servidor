const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ConvenioSchema = Schema({
  titulo: {
    type: String,
    required: true,
  },
  inicio: {
    type: String,
    required: true,
  },
  duracion: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model('convenios', ConvenioSchema)
