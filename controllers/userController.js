const User=require('../models/user');

//create a new user
const createUser=async(req,res)=>{
    try{
        const user= await User.create({
            username: req.body.username,
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
        const {username, email}=req.body;
        const [updated]=await User.update(
            {username,email},
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
const deleteUser=async (req,res)=>{
    try{
        const {id}=req.params;
        const deleted=await User.destroy({
            where: {id}
        });
        if(deleted===0){
            res.status(404).json({message: 'User not found'});
        }
        res.status(200).json({message: 'User deleted'});
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

module.exports={createUser,getUsers,updateUser,deleteUser};