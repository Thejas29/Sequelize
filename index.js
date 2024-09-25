const express=require('express');
const sequelize=require('./config/database');
const {createUser,getUsers,updateUser,deleteUser}=require('./controllers/userController');

const app=express();
app.use(express.json());
//const router=express.Router();
//sync database
sequelize.sync()
.then(()=>console.log('Database synced'))
.catch(err=>console.error('Error syncing database:',err));


//routes for crud 
app.post('/users',createUser);
app.get('/users',getUsers);
app.put('/users/:id',updateUser);
app.delete('/users/:id',deleteUser);

//start the server
const PORT=3000;
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});