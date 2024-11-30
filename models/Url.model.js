const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const URL = sequelize.define("URL", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    originalUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shortUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    clickCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  });
  return URL;
};
