const Universidad = require('../models/universidad.model')

function getUniversidades(req, res) {
  Universidad.find((err, result) => {
    if (err) throw err
    if (result) {
      res.status = 200
      res.json({ universidades: result })
    } else {
      res.send(JSON.stringify({ error: 'Error' }))
    }
  })
}

function agregarUniversidad(req, res) {
  let universidad = req.body

  if (universidad) {
    Universidad.create(universidad, (err, result) => {
      if (err) {
        console.log(err)
        res.status(400).json(err)
      } else {
        res.json({ universidad: result })
      }
    })
  } else {
    res.sendStatus(400)
  }
}
module.exports = {
  getUniversidades,
  agregarUniversidad,
}
