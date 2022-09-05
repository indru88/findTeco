const { Schema, model, default: mongoose } = require('mongoose')

const nominaSchema = new Schema({
  nombre: {
    type: String,
    require: true
  },
  apellido: {
    type: String,
    require: true
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
  dnijefe: {
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

module.exports = mongoose.model('Usuario', nominaSchema,)



