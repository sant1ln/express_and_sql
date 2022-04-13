const boom = require('@hapi/boom');
const getConecction = require('../libs/postgress')

class UserService {
  constructor() {}

  async create(data) {
    return data;
  }

  async find() {
    const client = await getConecction();
    const response = await client.query('SELECT * FROM tasks')
    return response.rows
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;
