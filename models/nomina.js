const { Schema, model, default: mongoose } = require('mongoose')

const nominaSchema = new Schema({
  nombre: {
    type: String,
  },
  apellido: {
    type: String,
  },
  legajo: {
    type: String,
  },
  dni: {
    type: String,
    require: true
  },
  fechacumpleanos: {
    type: Date,
  },
  rol: {
    type: String,
  },
  dniJefe: {
    type: String,
  },
  gerencia: {
    type: String,
  },
  sector: {
    type: String,
  }
}, {
  versionKey: false,
  timestamps: true
})


module.exports = mongoose.model('Usuario', nominaSchema)


