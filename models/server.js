const config = require('config')
const express = require('express')
const cors = require('cors');
const { dbConection, preload } = require('../config/db');
const swaggerUI = require('swagger-ui-express')
const openApiConfiguration = require('../docs/swagger')

class Server {

  constructor() {
    this.app = express();
    this.port = config.get('app.port');
    this.conectarDB()
    this.middlewares();
    this.routes();
  }

  async conectarDB() {
    await preload();
    await dbConection();
  }



  middlewares() {
    //CORS
    this.app.use(cors());

    //READ BODY
    this.app.use(express.json())

    //DOCUMENTATION
    this.app.use('/documentation', swaggerUI.serve, swaggerUI.setup(openApiConfiguration))
  }

  routes() {
    this.app.use('/api/nomina', require('../routes/nomina')),
      this.app.use('/api/mail', require('../routes/mail.js'))
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en ${this.port}`);
    })
  }

}

module.exports = Server;