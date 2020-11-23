const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UniversidadSchema = Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    pais: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },

    convenios: [
      {
        type: Schema.Types.ObjectId,

        ref: 'convenios',
      },
    ],
  },
  { collection: 'universidades' },
)

module.exports = mongoose.model('universidades', UniversidadSchema)
