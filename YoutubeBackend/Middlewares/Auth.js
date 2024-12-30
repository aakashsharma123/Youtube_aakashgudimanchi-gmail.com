import Jwt from 'jsonwebtoken';
import User from '../Models/User.js';

export async function Auth (req , res ,next) {
    const auth = req.headers['authorization'];

    if (!auth) {
        return res.status (404).json ({message : "token is not there"})
    }

    const decoded = Jwt.verify (auth , process.env.JWT_Password);

    if (decoded) {
        console.log("your token is verifed");
        req.user = await User.findOne ({email : decoded.email});
        next();
    }
}