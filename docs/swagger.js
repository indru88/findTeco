const swaggerJsdoc = require('swagger-jsdoc')


const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Documentación de la API",
    version: "1.0.0"
  },
  servers: [
    {
      url: 'http://localhost:3000/api'
    }
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer"
      }
    },
    schemas: {
      nomina: {
        type: "object",
        required: ['nombre', 'apellido', 'dni'],
        properties: {
          nombre: {
            type: "String"
          },
          apellido: {
            type: "String"
          },
          legajo: {
            type: "String"
          },
          dni: {
            type: "String"
          },
          fechacumpleanos: {
            type: "Date"
          },
          rol: {
            type: "String"
          },
          dnijefe: {
            type: "String"
          },
          gerencia: {
            type: "String"
          },
          sector: {
            type: "String"
          }
        }
      },
      nombreDni: {
        type: "object",
        required: [],
        properties: {
          nombre: {
            type: "String"
          },
          apellido: {
            type: "String"
          },
          dni: {
            type: "String"
          }
        }
      }
    }
  }
}



const options = {
  swaggerDefinition,
  apis: [
    './routes/*.js'
  ]
}

const openApiConfiguration = swaggerJsdoc(options)

module.exports = openApiConfiguration