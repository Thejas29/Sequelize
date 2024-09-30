const { Sequelize }= require('sequelize');

//connecting to database
const sequelize=new Sequelize('newdb','root','',{
    host: 'localhost',
    dialect: 'mysql'
});


const connectDB= async()=>{
 try{
    await sequelize.authenticate();
    console.log('Connection has been established successfully');
}catch(error){
    console.error('Unable to connect',error);
}
};

connectDB();

module.exports=sequelize;