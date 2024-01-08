// adminModel.js
import { DataTypes } from 'sequelize';
import  sequelize  from '../config/dbConfig.js';
import bcrypt from 'bcrypt';

const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,           
        autoIncrement: true
    },
    username: { 
        type: DataTypes.STRING,
        allowNull: false
    },

    // add validator
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },

    role: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
          this.setDataValue('password', bcrypt.hashSync(value, 10));
        },
      },
    },
    { timestamps:true }
);

User.sync();

export default User
