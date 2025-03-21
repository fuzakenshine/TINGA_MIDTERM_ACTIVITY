const { Sequelize } = require('sequelize');

// Create a Sequelize instance and connect to the MySQL database
const sequelize = new Sequelize('node-mysql-crud-api', 'root', 'john09125990132@ray', {
  host: 'localhost',
  dialect: 'mysql',
});

async function authenticate() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

authenticate();

module.exports = sequelize;
