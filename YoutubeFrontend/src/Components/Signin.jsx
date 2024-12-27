import React, { useState } from 'react';
import { FaHouse } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const [signUpData, setSignUpData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleForm = (e) => {
        e.preventDefault();
        
    };

    const handleData = (e) => {
       
    };

    return (
        <>
            <div className="container h-screen flex justify-center items-center">
                <div className='bg-[#292929] h-fit w-[50%]'>
                    <div className='flex justify-center items-center gap-4'>
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

                    <div className='flex flex-col w-[50%] mx-auto'>
                        <form onSubmit={handleForm} className='flex flex-col w-[100%] mx-auto gap-5 h-full mt-5'>
                            <input 
                                onChange={handleData} 
                                name='name' 
                                type="text" 
                                className='py-4 outline-none font-bold text-black rounded-md' 
                                placeholder='Enter name' 
                                value={signUpData.name} 
                            />
                            <input 
                                onChange={handleData} 
                                name='email' 
                                type="email" // Changed type to "email" for better validation
                                className='py-4 outline-none font-bold text-black rounded-md' 
                                placeholder='Enter Email' 
                                value={signUpData.email} 
                            />
                            <input 
                                onChange={handleData} 
                                name='password' 
                                type="password" // Changed type to "password" for security
                                className='py-4 outline-none font-bold text-black rounded-md' 
                                placeholder='Enter Password' 
                                value={signUpData.password} 
                            />
                            <button type="submit" className='bg-red-500 py-2'>Submit</button>
                        </form>

                        <div className='flex gap-x-5 mt-5'>
                            <p className='text-xl'>Don't have an account? </p>
                            <p className='text-red-500 text-xl font-bold'>Sign up here</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signin;
