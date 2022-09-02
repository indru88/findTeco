const { Router } = require('express');
const { validatorAdd, validatorGet } = require('../validators/nomina')
const { nominaGet, nominaPost, nominaPut, nominaDelete, nominaGetAll } = require('../controllers/nomina');

const router = Router();

router.get('/', nominaGetAll)

router.get('/:dni', nominaGet)

router.post('/', validatorAdd, nominaPost)

router.put('/:id', nominaPut)

router.delete('/:id', nominaDelete)

module.exports = router