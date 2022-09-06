const { Router } = require('express');
const { emailer } = require('../controllers/mail');

const router = Router();

router.get('/', emailer)

module.exports = router