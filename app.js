const express = require("express");
const app = express();
const { sequelize } = require("./models"); // Import sequelize instance

// Middleware to parse JSON request bodies
app.use(express.json());
// Routes
const userRoute = require("./routes/User.routes.js");

// Using Routes
app.use("/auth", userRoute);
// Sync the models with the database
sequelize
  .sync({ force: false }) // This syncs the database with your Sequelize models (creates tables if they don't exist)
  .then(() => {
    console.log("Database connected and synced");
  })
  .catch((error) => {
    console.error("Error syncing database:", error);
  });

module.exports = app;
