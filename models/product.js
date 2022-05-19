const Sequelize = require("sequelize");
const sequelize = require("../database");

const Product = sequelize.define("product", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  title: Sequelize.STRING,
});

module.exports = Product;
