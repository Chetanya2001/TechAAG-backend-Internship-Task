const dbConfig = require("../config/config.js"); // Import config
const { Sequelize } = require("sequelize");

// Initialize Sequelize instance with MySQL connection details
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

// Create a db object to hold the Sequelize instance and models
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models and associate them with Sequelize instance
db.User = require("./User.model.js")(sequelize, Sequelize);

// Export db object
module.exports = db;
