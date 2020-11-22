const Convenio = require('../models/convenio.model')

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
  Convenio.find({}, (err, convenios) => {
    if (err)
      return res
        .status(500)
        .send({ message: 'Error al realizar la peticion: ' + err })

    if (!convenios)
      return res.status(404).send({ message: 'No existen convenios' })

    res.json({ ok: true, convenios })
  })
}

function saveConvenio(req, res) {
  let convenio = new Convenio()
  convenio.titulo = req.body.titulo
  convenio.inicio = req.body.inicio
  convenio.duracion = req.body.duracion
  convenio.save((err, conveniostored) => {
    if (err)
      res
        .status(500)
        .send({ message: 'error al salvar en la base de datos: ${err}' })

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
        .send({ message: 'Error al actualizar el producto: ${err}' })

    res.status(200).send({ convenio: convenioUpdated })
  })
}
function deleteConvenio(req, res) {
  let convenioId = req.params.convenioId
  Convenio.findById(convenioId, (err) => {
    if (err)
      res.status(500).send({ message: 'Error al borrar el producto: ${err}' })

    Convenio.remove((err) => {
      if (err)
        res.status(500).send({ message: 'Error al borrar el producto: ${err}' })

      res.status(200).send({ message: 'El producto ha sido eliminado' })
    })
  })
}

module.exports = {
  getConvenioById,
  getAllConvenios,
  updateConvenio,
  saveConvenio,
  deleteConvenio,
}
