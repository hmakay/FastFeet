import Sequelize from 'sequelize';

import User from '../app/models/user';
import Receiver from '../app/models/receiver';

import databaseConfig from '../config/database';

const models = [User, Receiver];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
