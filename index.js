//const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const path = require('path');
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

// Load the swagger.json file
const swaggerDocument = JSON.parse(fs.readFileSync(path.resolve(__dirname, './docs/swagger.json'), 'utf8'));
// Serve Swagger docs at /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


//routes for crud 
app.post('/users',createUser);
app.get('/users',getUsers);
app.put('/users/:id',updateUser);
app.delete('/users/:id',deleteUser);

//start the server
const PORT=3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
  });