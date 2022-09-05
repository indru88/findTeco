const mongoose = require('mongoose')
const Usuario = require('../models/nomina')
const nombreDni = require('../models/nombreDni')
const cargarExcel = require('../utils/excel')


const dbConection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('--->> DB OK <<---')
  } catch (err) {
    console.log('--->> DB FAIL <<---')
    throw new Error(err)
  }
}

const preload = () => {
  const datos = cargarExcel()
  // Usuario.count({}, function (err, count) {
  //   if (count > 10) {
  //     mongoose.connection.collection('usuarios').drop()
  //     mongoose.connection.collection('nombrednis').drop()
  //   }
  // })
  const newNomina = Usuario.insertMany(datos)
  const nombDni = nombreDni.insertMany(datos)
}

module.exports = {
  dbConection,
  preload
}