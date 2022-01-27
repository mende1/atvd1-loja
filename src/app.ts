import express from 'express';
import routes from './routes';
import createConnection from './db';

class App {
  public express: express.Application;

  public constructor () {
    createConnection();
    this.express = express();
    this.routes();
  }

  private routes (): void {
    this.express.use(express.json());
    this.express.use(routes);
  }
}

export default new App().express;
