import Joi from 'joi'


export  function registerValidate (req , res , next) {

    const schema = Joi.object ({
        name : Joi.string().min(4).max(13).required(),
        email : Joi.string().email().required(),
        password : Joi.string().required()
    })

    const {error} = schema.validate (req.body)

    if (error) {
        return res.status (404).json ({message : "name or email or password is invalid" , err})
    }

    next()
}


export  function LoginValidate (req , res , next) {

    const schema = Joi.object ({
        email : Joi.string().email().required(),
        password : Joi.string().required()
    })

    const {error} = schema.validate (req.body)

    if (error) {
        return res.status (404).json ({message : "name or email or password is invalid" , err})
    }

    next()
}