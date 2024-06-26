import { DataTypes } from 'sequelize';
import sequelize from '../config/config.js';

const Car = sequelize.define('Car', {
    plate: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default Car;
