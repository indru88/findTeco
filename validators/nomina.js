const { check, validationResult } = require('express-validator')

const validatorAdd = [
  check('nombre')
    .exists()
    .notEmpty(),
  check('apellido')
    .exists()
    .notEmpty(),
  check('legajo')
    .exists()
    .notEmpty(),
  check('dni')
    .exists()
    .notEmpty()
    .isLength({ min: 7, max: 9 }),
  check('fechacumpleanos')
    .exists(),
  check('rol')
    .exists()
    .notEmpty(),
  check('dniJefe')
    .exists(),
  check('gerencia')
    .exists()
    .notEmpty(),
  check('sector')
    .exists(),
  (req, res, next) => {
    try {
      validationResult(req).throw()
      return next()
    } catch (err) {
      res.status(400)
      res.send({ errors: err.array() })
    }
  }
]

const validatorGet = [
  check('dni')
    .exists()
    .notEmpty()
    .isLength({ min: 7, max: 9 }),
  (req, res, next) => {
    try {
      validation(req.params).throw()
      return next()
    } catch (err) {
      res.status(400)
      res.send('{errors:err.array()}')
    }
  }
]

module.exports = {
  validatorAdd,
  validatorGet
}