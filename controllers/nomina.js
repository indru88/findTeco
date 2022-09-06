const { response } = require('express');
const { matchedData } = require('express-validator');
const Usuario = require('../models/nomina');
const { handleHttpError } = require('../utils/handleErrors');

/**
 * Retorna UN registro filtrado x DNI
 * @param {*} req 
 * @param {*} res 
 */
const nominaGet = async (req, res = response) => {
  try {
    const dni = req.params
    const user = await Usuario.findOne(dni)
    if (user === null) {
      handleHttpError(res, 'NOT_FOUND', 400)
    } else {
      res.json({ user })
    }
  } catch (e) {
    handleHttpError(res, 'ERROR_GET_EMPLOYEE')
  }
}

/**
 * Retorna TODOS los registros
 * @param {*} req 
 * @param {*} res 
 */
const nominaGetAll = async (req, res = response) => {
  try {
    const usuarios = await Usuario.find()
    res.json({ usuarios });
  } catch (e) {
    handleHttpError(res, 'ERROR_GET_EMPLOYEES')
  }

}

/**
 * Agrega un registro
 * @param {*} req 
 * @param {*} res 
 */
const nominaPost = async (req, res = response) => {
  try {
    const body = matchedData(req);
    // console.log(body)
    const usuario = new Usuario(body);
    await usuario.save();
    res.status(201)
    res.json({ usuario });
  } catch (e) {
    handleHttpError(res, 'ERROR_ADD_EMPLOYEE')
  }
}

/**
 * Modifica un registro
 * @param {*} req 
 * @param {*} res 
 */
const nominaPut = async (req, res = response) => {
  try {
    const { dni, ...body } = req.body;
    // console.log(body)
    const data = await Usuario.findOneAndUpdate({ dni: req.params.id }, { $set: body });
    if (data === null) {
      handleHttpError(res, 'NOT_FOUND', 400)
    } else {
      res.json({ data });
      res.status(201)
    }

  } catch (e) {
    handleHttpError(res, 'ERROR_MODIFY_EMPLOYEE')
  }
}

/**
 * Elimina un registro
 * @param {*} req 
 * @param {*} res 
 */
const nominaDelete = async (req, res = response) => {
  try {
    const user = await Usuario.findOneAndDelete({ dni: req.params.dni })
    if (user === null) {
      handleHttpError(res, 'NOT_FOUND', 400)
    } else {
      res.json({ user })
    }
  } catch (e) {
    handleHttpError(res, 'ERROR_DELETE_EMPLOYEE')
  }
}


module.exports = {
  nominaGetAll,
  nominaGet,
  nominaPost,
  nominaPut,
  nominaDelete
}