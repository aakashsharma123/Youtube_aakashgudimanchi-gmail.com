import Jwt from 'jsonwebtoken';


export function Auth (req , res ,next) {
    const auth = req.headers['authorization'];

    if (!auth) {
        return res.status (404).json ({message : "token is not there"})
    }

    const decoded = Jwt.verify (auth , process.env.JWT_Password);

    if (decoded) {
        console.log("your token is verifed");
        req.user = decoded
        next();
    }
}