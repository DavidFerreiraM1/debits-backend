import { Sequelize } from 'sequelize';
import { Debit } from './models/debit';

import config from './config/database';
const models = [Debit];

class Database {
  private connection: any;

  constructor() {
    this.init();
  }

  init(): void {
    this.connection = new Sequelize(config);
    models.map(m => m.initializer(this.connection));
  }
}

export default new Database();
