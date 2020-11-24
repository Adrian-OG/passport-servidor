const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const convenioroute = require('./routes/convenio.route')
//const universidadroute = require('./routes/universidad.route')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api', convenioroute)
//app.use('/api', universidadroute)

module.exports = app
