import React, { useState } from 'react'

function Register() {
    const [user, setUser] = useState({email: "", password: ""});
    const handleRegister = async(e)=>{
        e.preventDefault();
    }
    const updateEmail =()=>{
        setUser((prevUser)=>{
            return{...prevUser, email:prevUser.email }
        })
    }

    const updatePassword =()=>{
        setUser((prevUser)=>{
            return{...prevUser, password:prevUser.password }
        })
    }

    const handleChange = (evt) =>{
        const changeField = evt.target.name;
        const newValue = evt.target.value;
        setUser(currData =>{
            return{...currData, [changeField]: newValue};
        })
    }

  return (
    <div className='flex items-center justify-center h-screen bg-gradient-to-r from-purple-400 to-red-500'>
        <form className='w-full max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={handleRegister}>
            <h3 className='mb-4 text-xl font-bold text-center text-red-500'>Register</h3>
            <div className='mb-4'>
                <label htmlFor='email' className='block text-grey-700 text-sm font-bold mb-2'>Email</label>
                <input type="email" name='email' id="email" onChange={updateEmail} 
                className='shadow border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
            </div>
            <div className='mb-6'>
                <label htmlFor='password' className='block text-grey-700 text-sm font-bold mb-2'>Password</label>
                <input type="password" name='password' id="password" onChange={updatePassword}
                className='shadow border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
            </div>
            <div className='flex items-center justify-between'>
                <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4
                rounded focus:outline-none focus:shadow-outline' type='submit'>Submit</button>
            </div>
            
        </form>
    </div>
  )
}

export default Register
