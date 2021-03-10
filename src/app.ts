import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from './router';
// import router from ''

class App {
  public express: express.Application;
  constructor() {
    this.express = express();
    this.middleware();
  }

  private middleware(): void {
    this.express.use(express.json());
    this.express.use(morgan(':method :url :status'));
    this.express.use(cors());
    this.routes();
  }

  private routes(): void {
    this.express.use('/api', router);
  }

}

export default new App().express;