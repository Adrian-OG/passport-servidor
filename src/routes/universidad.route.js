const express = require('express')
const universidadcontroller = require('../controllers/universidad.controller')
const api = express.Router()

api.get('/universidad/all', universidadcontroller.getUniversidades)

api.post('/universidad', universidadcontroller.agregarUniversidad)
//api.put('/convenio:productId', conveniocontroller.updateConvenio)
//api.delete('/convenio:productId', conveniocontroller.deleteConvenio)

module.exports = api
