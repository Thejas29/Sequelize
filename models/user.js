const {DataTypes}=require('sequelize');
const sequelize=require('../config/database');

const User= sequelize.define('User',{
    username:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }   
},{
    freezeTableName:true
});

module.exports=User;