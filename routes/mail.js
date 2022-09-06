const { Router } = require('express');
const { emailer } = require('../controllers/mail');

const router = Router();

router.get('/', emailer)
/**
 * Get Nomina
 * @openapi
 * /mail:
 *    get:
 *      tags:
 *        - Mail
 *      summary: "Envia un email"
 *      description: Envia un correo electrónico que contiene una tabla HTML con todos los empleados
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        schema:
 *          type: string
 *      responses:
 *        '200':
 *          description: Retorna el listado de empleados.
 *          content:
 *             application/json:
 *               schema:
 *                   type: object
 *        '400':
 *          description: ERROR_SENT_MAIL.
 */

module.exports = router