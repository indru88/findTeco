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
            type: String,
            example: "Pedro"
          },
          apellido: {
            type: String,
            example: "Fernandez"
          },
          legajo: {
            type: String,
            example: "u666666"
          },
          dni: {
            type: String,
            example: "12345678"
          },
          fechacumpleanos: {
            type: Date,
            example: "1988/12/21"
          },
          rol: {
            type: String,
            example: "Trainee"
          },
          dnijefe: {
            type: String,
            example: "29874534"
          },
          gerencia: {
            type: String,
            example: "COO"
          },
          sector: {
            type: String,
            example: "Personal"
          }
        }
      },
      nombreDni: {
        type: "object",
        required: [],
        properties: {
          nombre: {
            type: String
          },
          apellido: {
            type: String
          },
          dni: {
            type: String
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