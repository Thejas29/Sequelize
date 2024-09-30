const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true // Ensures that email addresses are unique
    }
}, {
    tableName: 'usertable', // Specify the table name here
    freezeTableName: true, // Prevent Sequelize from pluralizing the table name
    timestamps: true // Automatically add createdAt and updatedAt fields
});

module.exports = User;
