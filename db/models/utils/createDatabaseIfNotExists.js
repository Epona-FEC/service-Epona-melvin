const Sequelize = require('sequelize');

const { mySQLPassword, mySQLusername } = require('../../../config/index.js');

const creatDatabaseIfNotExist = (database) => {
  const sequelize = new Sequelize('', mySQLusername, mySQLPassword, {
    dialect: 'mysql',
  });

  return new Promise((resolve, reject) => {
    sequelize.query(`CREATE DATABASE IF NOT EXISTS ${database}`)
      .then((message) => {
        resolve(message);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports = creatDatabaseIfNotExist;
