import React, { useState } from 'react';
import { FaHouse } from "react-icons/fa6";
import { Outlet, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { ErrorMessage, successMessage } from '../ErrorHandle/HandleResponse';
import Navbar from './NavBar.jsx';
import { useAuth } from '../utlies/AuthContext.jsx';
import axios from 'axios';

const Login = () => {


    const [LoginData, setLoginData] = useState({
        email: '',
        password: ''
    });


    const [login, setlogin] = useState(false);
    const navigate = useNavigate();

    const handleForm = async (e) => {
        e.preventDefault();
        const { email, password } = LoginData;

        if (!email || !password) {
            return ErrorMessage("Email or password not filled");
        }
        try {
            const url = 'http://localhost:3000/auth/login'
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(LoginData)
            });

            const result = await response.json();
            const { message, success, token, name, email, id , isChannel } = result;

            if (token) {
                console.log("is channel is " , isChannel);
                
                localStorage.setItem("token", token);
                localStorage.setItem("name", name);
                localStorage.setItem("email", email);
                localStorage.setItem("id", id);
                // setIsChannel(isChannel)

                localStorage.setItem("channelrender" , JSON.stringify (isChannel));
            }

            if (localStorage.getItem("token")) {
                successMessage("Login Successful");
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            } else {
                ErrorMessage("Email or password is wrong");
            }
        } catch (err) {
            return ErrorMessage("Something went wrong", err);
        }
    };

    const handleData = (e) => {
        const { name, value } = e.target;

        const copysetLoginData = { ...LoginData };
        copysetLoginData[name] = value;
        setLoginData(copysetLoginData);
    };

    return (
        <>
            <div className="container h-full w-full grid place-content-center ">
                <div className=" mt-36 fixed  bg-[#292929] w-full sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%] 2xl:w-[70%] rounded-lg p-6 sm:p-8 flex flex-col items-center justify-center 2xl:mx-52">
                    <div className="flex justify-between items-center w-full mb-4">
                        <div className="flex items-center">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/725/725300.png"
                                alt="Logo"
                                width={60}
                                height={100}
                            />
                            <span className="text-xl font-bold ml-2">Youtube Login</span>
                        </div>
                        <FaHouse onClick={() => navigate('/')} className="text-2xl text-red-500 cursor-pointer" />
                    </div>

                    <form onSubmit={handleForm} className="flex flex-col gap-5 w-full">
                        <input
                            onChange={handleData}
                            name="email"
                            type="email"
                            className="py-4 px-3 outline-none font-bold text-black rounded-md"
                            placeholder="Enter Email"
                            value={LoginData.email}
                        />
                        <input
                            onChange={handleData}
                            name="password"
                            type="password"
                            className="py-4 px-3 outline-none font-bold text-black rounded-md"
                            placeholder="Enter Password"
                            value={LoginData.password}
                        />
                        <button type="submit" className="bg-red-500 py-2 rounded-md text-white font-bold mt-4 hover:bg-red-600 transition duration-200">
                            Submit
                        </button>
                    </form>

                    <div className="flex flex-col items-center mt-5">
                        <p className="text-xl">Don't have an account?</p>
                        <p onClick={() => navigate('/signin')} className="text-red-500 font-bold mt-2 cursor-pointer hover:underline">
                            Sign up
                        </p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
}

export default Login;
