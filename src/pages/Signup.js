import React from 'react'
import "../css/Login.css"
import APIService from '../components/APIService';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Signup = () => {

    const [isHovered, setIsHovered] = useState(false);
    let navigate = useNavigate()
    const [post, setPost] = useState({
        firstname: '',
        lastname: '',
        email: '',
        username: '',
        password: '',
        rpassword: '',
        role: 'User'
    })

    const handleInput = (event) =>{
        setPost({...post, [event.target.name]: event.target.value})
        console.log(post)
    }

    function handleRegister() {
        const isFormValid = Object.values(post).every((value) => value.trim() !== '');
        if (!isFormValid) {
            window.alert('Please fill in all fields.');
            return;
        }

        if (post.password !== post.rpassword) {
            window.alert("Passwords do not match!");
            return;
        }

        axios.post('http://127.0.0.1:8000/kitchenMaster/userform/add/', post)
            .then(response => {
                console.log(response);

                // setPost({
                //     firstname: '',
                //     lastname: '',
                //     email: '',
                //     username: '',
                //     password: '',
                //     rpassword: '',
                //     role: 'User'
                // });

                window.alert("Registration successful !");
                navigate('/')
            })
            .catch(err => console.log(err));
    }

    const buttonStyle = {
        "color": isHovered ? '#DA0037' : '#EDEDED',
        "backgroundColor": isHovered ? '#EDEDED' : '#DA0037',
        "transition": isHovered ? '0.3s ease-in-out' : '',
    };

    return (
        <>
            <div className="coonn min-h-screen flex items-center justify-center bg-gray-300" style={{backgroundColor : "rgba(0, 0, 0, 0.84)"}}>
                <div className="container mx-auto p-16 ">
                    <div>
                        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                            {/* <div className="container rounded-2xl bg-gray-500"> */}
                            <div className="bg-black sm:mx-auto sm:w-full sm:max-w-lg rounded-3xl">
                                <div className="sm:mx-auto sm:w-full sm:max-w-lg">
                                    <img src="/img/adduser3.jpg" alt="Sign In" className='myimg rounded-full'/>
                                    <div className="container rounded-2xl bg-gray-900 w-84 h-84"></div>
                                    <h2 className="bon mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-white">
                                        Sign Up to <span style={{color : "#DA0037"}}>Kitchen-Master</span>
                                    </h2>
                                </div>

                                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                                    <div className="space-y-6">
                                        <div>
                                            <label htmlFor="firstname" className="name block text-lg font-medium leading-6 text-white">
                                                firstname
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="firstname"
                                                    name="firstname"
                                                    type="text"
                                                    placeholder='Enter firstname Name'
                                                    onChange={handleInput}
                                                    required
                                                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="lastname" className="name block text-lg font-medium leading-6 text-white">
                                                lastname
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="lastname"
                                                    name="lastname"
                                                    type="text"
                                                    placeholder='Enter lastname Name'
                                                    onChange={handleInput}
                                                    required
                                                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="userName" className="name block text-lg font-medium leading-6 text-white">
                                                Username
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="username"
                                                    name="username"
                                                    type="text"
                                                    placeholder='Enter username'
                                                    onChange={handleInput}
                                                    required
                                                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="name block text-lg font-medium leading-6 text-white">
                                                Email
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    placeholder='Enter Email'
                                                    onChange={handleInput}
                                                    required
                                                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex items-center justify-between">
                                                <label htmlFor="password" className="block text-lg font-medium leading-6 text-white">
                                                    Password
                                                </label>
                                            </div>
                                            <div className="mt-2">
                                                <input
                                                    id="password"
                                                    name="password"
                                                    type="password"
                                                    placeholder='Enter Password'
                                                    onChange={handleInput}
                                                    required
                                                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex items-center justify-between">
                                                <label htmlFor="password" className="block text-lg font-medium leading-6 text-white">
                                                    Re-enter Password
                                                </label>
                                            </div>
                                            <div className="mt-2">
                                                <input
                                                    id="rpassword"
                                                    name="rpassword"
                                                    type="password"
                                                    placeholder='Enter Password'
                                                    onChange={handleInput}
                                                    required
                                                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <button
                                                style={buttonStyle}
                                                onMouseEnter={() => setIsHovered(true)}
                                                onMouseLeave={() => setIsHovered(false)}
                                                onClick={handleRegister}
                                                className="bonn flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            >
                                                Sign Up
                                            </button>
                                        </div>
                                    </div>
                                        <p className="mt-10 text-center text-lg text-white">
                                            Already have an Account?
                                            <a href="/" className="font-semibold leading-6 text-white hover:text-red-600">
                                                Sign In
                                            </a>
                                        </p>)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )



}

export default Signup




