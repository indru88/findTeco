const { Router } = require('express');
const { sendMail } = require('../controllers/mail');

const router = Router();

router.get('/', sendMail)

module.exports = router