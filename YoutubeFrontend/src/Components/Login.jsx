import React, { useState } from 'react';
import { FaHouse } from "react-icons/fa6";
import { Outlet, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { ErrorMessage, successMessage } from '../ErrorHandle/HandleResponse';
import Navbar from './NavBar.jsx';
const Login = () => {
    const [LoginData, setLoginData] = useState({
        email: '',
        password: ''
    });    
    const [login , setlogin] = useState (false);


    const navigate = useNavigate();

    const handleForm =async (e) => {
        e.preventDefault();
        const {email , password} = LoginData;

        if (!email|| !password) {
            return ErrorMessage ("email or password not filled")
        }
        try {
            const url = 'http://localhost:3000/auth/login'
            const response = await fetch (url , {
                method : "POST",

                headers : {
                    "Content-Type" : "application/json"
                },

                body : JSON.stringify (LoginData)
            })

            const result = await response.json();
            const {message , success , token , name , email, id} = result

            if (token) {
                localStorage.setItem ("token" , token)
                localStorage.setItem ("name" , name)
                localStorage.setItem ("email" , email)
                localStorage.setItem("id" , id)
            }

            if (localStorage.getItem ("token")) {
                successMessage ("Login Successfull")
                setTimeout(() => {
                    navigate('/')
                },  [2000]);
            }else{
                ErrorMessage("email or password is wrong")
            }
            
        }catch (err) {
            return ErrorMessage("something went wrong" , err)
        }

       

    };

    const handleData = (e) => {
       const {name , value } = e.target;

       const copysetLoginData = {...LoginData};    
       copysetLoginData[name] = value;
       setLoginData (copysetLoginData)
    };


    // console.log(Token);
    // console.log(typeof (Token));
    

    return (
        <>
            <div className="container h-screen flex justify-center items-center">
                <div className='bg-[#292929] h-fit w-[60%] ml-44 rounded-lg '>
                    <div className='flex justify-center items-center gap-4 '>
                        <div className='flex items-center'>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/725/725300.png"
                                alt=""
                                width={60}
                                height={100}
                            />
                            <span className='text-xl font-bold'>Youtube Login</span>
                        </div>
                        <FaHouse onClick={() => navigate('/')} className='text-2xl text-red-500 cursor-pointer' />
                    </div>

                    <div className='flex flex-col w-[60%] py-5 mx-auto'>
                        <form onSubmit={handleForm} className='flex flex-col w-[100%] mx-auto gap-5 h-full mt-5'>
                            <input 
                                onChange={handleData} 
                                name='email' 
                                type="email" // Changed type to "email" for better validation
                                className='py-4 outline-none font-bold text-black rounded-md' 
                                placeholder='Enter Email' 
                                value={LoginData.email} 
                                />
                            <input 
                                onChange={handleData} 
                                name='password' 
                                type="password" 
                                className='py-4 outline-none font-bold text-black rounded-md' 
                                placeholder='Enter Password' 
                                value={LoginData.password} 
                            />
                            <button type="submit" className='bg-red-500 py-2'>Submit</button>
                        </form>

                        <div className='flex gap-x-5 mt-5 '>
                            <p className='text-xl'>Don't have an account? </p>
                            <p onClick={() => navigate('/signin')} className='text-red-500 font-bold'>Sign up </p>
                        </div>
                    </div>
                </div>
            <ToastContainer/>

            </div>
        </>
    );
}

export default Login;