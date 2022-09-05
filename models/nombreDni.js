const { Schema, model, default: mongoose } = require('mongoose')

const NombreDniSchema = new Schema({
  nombre: {
    type: String,
    as: 'Nomb'
  },
  apellido: {
    type: String,
    as: 'Apel'
  },
  dni: {
    type: String,
    require: true
  }
}, {
  versionKey: false,
  timestamps: true
}
)

module.exports = mongoose.model('nombreDni', NombreDniSchema,)
