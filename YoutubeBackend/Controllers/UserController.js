import User from '../Models/User.js'
import bcrypt from 'bcrypt';
import Jwt from 'jsonwebtoken'
import { Channel } from '../Models/Channel.js';

export async function registeration (req , res) {
    const {name , email , password} = req.body;
    
    try {
        const user = await User.findOne ({name});

        if (user) {
            return res.status(409).json({message : "user is already registered" , success : false});
        }

        const newUser = new User ({name , email , password});
        newUser.password = await bcrypt.hash (newUser.password , 10);

        const registeredUser = await newUser.save();

        registeration && res.status(201).json ({message : "registration successfull" , success : true})

    }catch (err) {  
        return res.status(500).json({message : "something happened" , success : false}); 
    }
}

export async function login (req , res) {

    const {email , password} = req.body;
    const user = await User.findOne({email});

    try {

        if (!user) {
            return res.status(403).json ({message : "you are not registered first register yourself"} )
        }

        const isPassword = await bcrypt.compare (password , user.password);

        if (isPassword === false) {
            return res.status (404).json ({message : "email or password is invalid"})
        }

        const accessToken = Jwt.sign ({email : user.email , password : user.password} , "aakash@2002" , {expiresIn : '7d'})

        
    
       if (accessToken) {
        const channel =  await Channel.findOne ({user_id : user._id});
        res.status(200).json ({
            message : "login successfull ",
            success : true,
            token : accessToken,
            name : user.name,
            email : user.email,
            id : user._id,
            isChannel : channel ? true : false
            })
       }


    }catch (err) {
        return res.status(403).json ({message : "something went wrong "} )
    }
}