import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FcGoogle} from "react-icons/fc";
import axios from 'axios';
import {toast}  from 'react-toastify';

function Register() {
    const [user, setUser] = useState({email: "", password: ""});
    const [showPassword, setShowPassword] = useState(false);
    const handleRegister = async(e)=>{
        e.preventDefault();
        // console.log("email: ", user.email);
        // console.log("password: ", user.password);
        try{
            const response = await axios.post("http://localhost:5000/api/auth/register", user, {withCredentials: true}, );
            if(response.status ===200){
                console.log("Success: ", response.data);
                toast.success("Registration Successfull !");
                
            }

        }catch(error){
            console.log("Error message from register: ", error.response);
            toast.error(error.response.data.message);
        }
        
    }
    const updateEmail =(evt)=>{
        const email = evt.target.value;
        setUser((prevUser)=>({
            ...prevUser, 
            email: email
        }))
    }

    const updatePassword =(evt)=>{
        const password = evt.target.value;
        setUser((prevUser)=>({
            ...prevUser,password
        }))
    }

    const handleChange = (evt) =>{
        const changeField = evt.target.name;
        const newValue = evt.target.value;
        setUser(currData =>{
            return{...currData, [changeField]: newValue};
        })
    }

    const passwordCheck = (e)=>{ setShowPassword(e.target.checked)};

  return (
    <div className='flex items-center justify-center h-screen bg-gradient-to-r from-purple-400 to-red-500'>
        <form className='w-full max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={handleRegister}>
            <h3 className='mb-4 text-xl font-bold text-center text-red-500'>Register</h3>
            <div className='mb-5'>
                <label htmlFor='email' className='block text-grey-700 text-sm font-bold mb-2'>Email</label>
                <input type="email" name='email' id="email" onChange={updateEmail} 
                className='shadow border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
            </div>
            <div className='mb-6'>
                <label htmlFor='password' className='block text-grey-700 text-sm font-bold mb-2'>Password</label>
                <input type={showPassword? "text": "password"} name='password' id="password" onChange={updatePassword}
                className='shadow border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                <div className='flex items-center mt-2'>
                    <input type='checkbox' checked={showPassword} onChange={passwordCheck} id='show-password'/>
                    <label htmlFor='show-password' className='text-xs text-gray-600 ml-1'>Show Password</label>
                </div>
            </div>
            <div className='flex items-center justify-between mb-6'>
                <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4
                rounded focus:outline-none focus:shadow-outline' type='submit'>Submit</button>
                <p className='text-sm text-red-500 hover:text-red-700'>Already registered ?{"  "}
                    <Link to="/signin" className='font-bold'>Sign In</Link>
                </p>
            </div>
            <div>
                <Link to="http://localhost:5000/auth/google">
                    <p className='flex items-center justify-center border border-gray-400 text-gray font-bold py-2 
                    px-4 rounded w-full cursor-pointer'>
                        <FcGoogle className='mr-2 h-6 w-6'/>Sign In with Google
                    </p>
                </Link>
            </div>
        </form>
    </div>
  )
}

export default Register
