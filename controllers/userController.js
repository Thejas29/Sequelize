const User=require('../models/user');

//create a new user
const createUser=async(req,res)=>{
    try{
        const user= await User.create({
            name: req.body.name,
            email: req.body.email
        });
        res.status(201).json(user);
    }catch(error){
        res.status(400).json({error: error.message});
    }
};

//get all users

const getUsers=async(req,res)=>{
    try{
        const users = await User.findAll();
        console.log(users);
        res.status(200).json(users);
    }catch(error){
        res.status(500).json({error: error.message});
    }
};
/*
const getUsers = async (req, res) => {
    try {
        const users = [{ username: 'testuser', email: 'test@example.com' }];
        res.status(200).json(users);  // Send hardcoded data as response
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
*/


//update user
const updateUser=async (req,res)=>{
    try{
        const { id }= req.params;
        const {name, email}=req.body;
        const [updated]=await User.update(
            {name,email},
            {where: {id}}
        );
        if(updated===0){
            return res.status(404).json({message:'User not found'});
        }
        res.status(200).json({message: 'User updated'});
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

//delete user
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        
        if (!user) {
            return res.status(404).json({ error: "User not found" }); // Respond if user is not found
        }
        
        await user.destroy(); // Delete the user
        
        return res.status(200).json({ message: "User deleted successfully" }); // Success response
    } catch (error) {
        console.error('Error deleting user:', error);
        return res.status(500).json({ error: "An error occurred while deleting the user" }); // Error response
    }
};


module.exports={createUser,getUsers,updateUser,deleteUser};