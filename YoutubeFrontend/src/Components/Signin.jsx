import React, { useState } from 'react';
import { FaHouse } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { ErrorMessage, successMessage } from '../ErrorHandle/HandleResponse.js';

const Signin = () => {
    const [signUpData, setSignUpData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleForm = async (e) => {
        e.preventDefault();
        const { name, email, password } = signUpData;

        if (!name || !email || !password) {
            return successMessage("Name, email, or password not filled");
        }
        try {
            const url = 'http://localhost:3000/auth/register'
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "content-Type": "application/json"
                },
                body: JSON.stringify(signUpData)
            });

            const result = await response.json();
            console.log(result);

            const { message, success } = result;

            if (success === true) {
                successMessage("Registration successful");
                setTimeout(() => {
                    navigate('/login')
                }, 2000)
            } else {
                ErrorMessage("You have already registered, please log in")
            }

        } catch (err) {
            return ErrorMessage("Something went wrong", err)
        }
    };

    const handleData = (e) => {
        const { name, value } = e.target;

        const copyofSignUpdata = { ...signUpData };
        copyofSignUpdata[name] = value;
        setSignUpData(copyofSignUpdata)
    };

    return (
        <>
            <div className="container w-full h-full grid place-content-center">
                <div className="fixed top-32 bg-[#292929] rounded-lg w-full sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%] 2xl:w-[70%] 2xl:mx-52  p-8 mx-auto">
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/725/725300.png"
                                alt="Logo"
                                width={60}
                                height={100}
                            />
                            <span className="text-xl font-bold ml-2">Youtube Sign-up</span>
                        </div>
                        <FaHouse onClick={() => navigate('/')} className="text-2xl text-red-500 cursor-pointer" />
                    </div>

                    <form onSubmit={handleForm} className="flex flex-col gap-5 w-full">
                        <input
                            onChange={handleData}
                            name="name"
                            type="text"
                            className="py-4 px-3 outline-none font-bold text-black rounded-md"
                            placeholder="Enter name"
                            value={signUpData.name}
                        />
                        <input
                            onChange={handleData}
                            name="email"
                            type="email"
                            className="py-4 px-3 outline-none font-bold text-black rounded-md"
                            placeholder="Enter Email"
                            value={signUpData.email}
                        />
                        <input
                            onChange={handleData}
                            name="password"
                            type="password"
                            className="py-4 px-3 outline-none font-bold text-black rounded-md"
                            placeholder="Enter Password"
                            value={signUpData.password}
                        />
                        <button
                            type="submit"
                            className="bg-red-500 py-2 text-white rounded-md mt-4 hover:bg-red-600 transition duration-200"
                        >
                            Submit
                        </button>
                    </form>

                    <div className="flex flex-col items-center gap-2 mt-5">
                        <p className="text-xl">Already have an account?</p>
                        <p
                            onClick={() => navigate('/login')}
                            className="text-red-500 text-xl font-bold cursor-pointer hover:underline"
                        >
                            Login here
                        </p>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </>
    );
}

export default Signin;
