const Convenio = require('../models/convenio.model')
const jwt = require('jsonwebtoken')
const fs = require('fs')

//------------------------CRUD-----------------------------
function getConvenioById(req, res) {
  let convenioId = req.params.convenioId

  Convenio.findById(convenioId, (err, convenio) => {
    if (err)
      return res
        .status(500)
        .send({ message: 'Error al realizar la peticion: ' + err })

    if (!convenio)
      return res.status(404).send({ message: 'El convenio no existe' })

    res.status(200).send({ convenio })
  })
}

function getAllConvenios(req, res) {
  let token = req.header('Authorization').split(' ')
  var publicKey = fs.readFileSync('src/keys/jwt.pub')
  jwt.verify(token[1], publicKey, (err, decoded) => {
    if (err) return res.status(401).send({ ok: false, error: err.message })
    Convenio.find({}, (err, convenios) => {
      if (err)
        return res
          .status(500)
          .send({ message: 'Error al realizar la peticion: ' + err })

      if (!convenios)
        return res.status(404).send({ message: 'No existen convenios' })

      res.json({ ok: true, convenios })
      return
    })
  })
}

function saveConvenio(req, res) {
  let convenio = new Convenio()
  convenio.college = req.body.college
  convenio.start = req.body.start
  convenio.finish = req.body.finish
  convenio.link_img = req.body.link_img
  convenio.country = req.body.country
  convenio.country_code = req.body.country_code
  convenio.save((err, conveniostored) => {
    if (err)
      res
        .status(500)
        .send({ message: 'error al salvar en la base de datos: ' + err })

    res.status(200).send({ convenio: conveniostored })
  })
}
function updateConvenio(req, res) {
  let convenioId = req.params.convenioId
  let update = req.body
  Convenio.findByIdAndUpdate(convenioId, update, (err, convenioUpdated) => {
    if (err)
      res
        .status(500)
        .send({ message: 'Error al actualizar el producto: ' + err })

    res.status(200).send({ convenio: convenioUpdated })
  })
}
function deleteConvenio(req, res) {
  let convenioId = req.params.convenioId
  Convenio.findById(convenioId, (err) => {
    if (err)
      res.status(500).send({ message: 'Error al borrar el producto: ' + err })

    Convenio.remove((err) => {
      if (err)
        res.status(500).send({ message: 'Error al borrar el producto: ' + err })

      res.status(200).send({ message: 'El producto ha sido eliminado' })
    })
  })
}

//------------------------------------Vincular una universidad a un convenio-----------------------

module.exports = {
  getConvenioById,
  getAllConvenios,
  updateConvenio,
  saveConvenio,
  deleteConvenio,
  CreateConvenio,
}
