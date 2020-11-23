const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ConvenioSchema = Schema({
  college: {
    type: String,
    required: true,
  },
  start: {
    type: String,
    required: true,
  },
  finish: {
    type: String,
    required: true,
  },
  link_img: {
    type: String,
    required: true,
  },
  country: {
    type: String,
  },
  country_code: {
    type: String,
  },
})

module.exports = mongoose.model('convenios', ConvenioSchema)
