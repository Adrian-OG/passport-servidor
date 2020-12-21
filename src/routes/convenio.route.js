const express = require('express')
const conveniocontroller = require('../controllers/convenio.controller')
const api = express.Router( )

api.get('/convenio', conveniocontroller.getAllConvenios)
api.get('/convenio/:productId', conveniocontroller.getConvenioById)
api.post('/convenio/add', conveniocontroller.saveConvenio)

api.put('/convenio:productId', conveniocontroller.updateConvenio)
api.delete('/convenio:productId', conveniocontroller.deleteConvenio)

module.exports = api
