const { Router } = require('express');
const { validatorAdd } = require('../validators/nomina')
const { nominaGet, nominaPost, nominaPut, nominaDelete, nominaGetAll } = require('../controllers/nomina');

const router = Router();

router.get('/', nominaGetAll)
/**
 * Get Nomina
 * @openapi
 * /nomina:
 *    get:
 *      tags:
 *        - employees
 *      summary: "Detalle de empleados"
 *      description: Obtener el listado de empleados
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
 *                   $ref: '#/components/schemas/nomina'
 *        '403':
 *          description: ERROR_GET_EMPLOYEES.
 */

router.get('/:dni', nominaGet)
/**
 * Get Nomina
 * @openapi
 * /nomina/{dni}:
 *    get:
 *      tags:
 *        - employees
 *      summary: "Detalle de UN empleado"
 *      description: Obtiene la información de un empleado
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *      - name: dni
 *        in: path
 *        schema:
 *          type: string
 *      responses:
 *        '200':
 *          description: Retorna la informacion de un registro.
 *          content:
 *             application/json:
 *               schema:
 *                   $ref: '#/components/schemas/nomina'
 *        '400':
 *          description: NOT_FOUND.
 */

router.post('/', validatorAdd, nominaPost)
/**
 * Add employee
 * @openapi
 * /nomina:
 *    post:
 *      tags:
 *        - employess
 *      summary: "Agrega UN empleado"
 *      description: Agrega un empleado y obtiene el detalle del registro
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        '201':
 *          description: Retorna el objeto creado en la coleccion.
 *        '403':
 *          description: Error en la creación.
 *        '400':
 *          description: Error.
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                 $ref: "#/components/schemas/nomina"
 *    responses:
 *      '201':
 *        description: Retorna el objeto insertado en la coleccion con stado 201
 *        content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/nomina'
 *      '403':
 *        description: No tiene permisos '403'
 */

router.put('/:id', nominaPut)
/**
 * Update Employee
 * @openapi
 * /nomina/{dni}:
 *    put:
 *      tags:
 *        - employess
 *      summary: "Modifica UN empleado"
 *      description: Modifica un empleado y obtiene el detalle del registro
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *      - name: dni
 *        in: path
 *        schema:
 *          type: string
 *      responses:
 *        '200':
 *          description: Retorna el objeto modificado en la coleccion.
 *        '403':
 *          description: Error en la modificación.
 *        '400':
 *          description: Error.
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                 $ref: "#/components/schemas/nomina"
 *    responses:
 *      '200':
 *        description: Retorna el objeto insertado en la coleccion con stado 201
 *        content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/nomina'
 *      '403':
 *        description: No tiene permisos '403'
 */

router.delete('/:id', nominaDelete)
/**
 * Delete Employee
 * @openapi
 * /nomina/{id}:
 *    delete:
 *      tags:
 *        - employees
 *      summary: "Eliminar un empleado"
 *      description: Elimiar un empleado de forma permanente
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *      - name: id
 *        in: path
 *        description: DNI de empleado a retornar
 *        required: true
 *        schema:
 *          type: string
 *      responses:
 *        '200':
 *          description: Retorna el objecto de la cancion.
 *        '400':
 *          description: Error
 */

module.exports = router