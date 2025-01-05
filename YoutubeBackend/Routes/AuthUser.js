import {Router} from 'express';
import { registerValidate , LoginValidate } from "../Middlewares/AuthValidate.js";
import { login, registeration } from "../Controllers/UserController.js";
import {Auth} from "../Middlewares/Auth.js"

const router = Router();

router.post ('/register' , registerValidate , registeration)
router.post ('/login' ,  LoginValidate , login)

export default router