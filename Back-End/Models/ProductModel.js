// donationModel.js
import { DataTypes } from 'sequelize';
import  sequelize  from '../config/dbConfig.js';
const Product = sequelize.define('products', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  supplier: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},
{ timestamps:true }

);

Product.sync();

export default Product;
