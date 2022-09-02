const mongoose = require('mongoose')
const Usuario = require('../models/nomina')
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

const preload = async () => {
  datos = cargarExcel()
  // Usuario.findOne({ name: 'usuarios' }).then(res => {
  //   if (res) {
  //     mongoose.connection.collection('usuarios').drop()
  //   }
  // })
  Usuario.count({}, function (err, count) {
    if (count > 0) {
      mongoose.connection.collection('usuarios').drop()
    }
  })
  const newNomina = await Usuario.insertMany(datos)
}

module.exports = {
  dbConection,
  preload
}