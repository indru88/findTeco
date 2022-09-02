const express = require('express')
const cors = require('cors');
const { dbConection, preload } = require('../config/db');

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.conectarDB()
    this.middlewares();
    this.routes();
  }

  async conectarDB() {
    await dbConection();
    await preload();
  }



  middlewares() {
    //CORS
    this.app.use(cors());

    //READ BODY
    this.app.use(express.json())

  }



  routes() {
    this.app.use('/api/nomina', require('../routes/nomina'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en ${this.port}`);
    })
  }

}

module.exports = Server;