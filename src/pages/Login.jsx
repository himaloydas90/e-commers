import React, { useState } from 'react'
import Input from '../component/ui/input'
import Button from '../component/ui/button'
import { useLoginMutation } from '../services/Api'
import { Link, useNavigate } from 'react-router'

const Login = () => {
  const navigate = useNavigate()
   const [login,{error}] = useLoginMutation()
   const [loginData,setLoginData]=useState({
     username:"",
     password:""
   });
 const handlelogin = async (e) => {
   e.preventDefault();
   const res = await login(loginData);
   if (res.data){
    localStorage.setItem('token', res.data.token || res.data.accessToken);
    navigate('/');
   }
 };
  
  return (
   <div className='flex justify-center items-center h-screen'>
<div
  className="w-lg rounded-lg shadow h-auto p-6 bg-white relative overflow-hidden"
>
  <div className="flex flex-col justify-center items-center space-y-2">
    <h2 className="text-2xl font-medium text-primary">Login</h2>
  </div>
  <form onSubmit={handlelogin} className="w-full mt-4 space-y-3">
    <div>
      <Input
        className="outline-none border-2 rounded-md px-2 py-1 text-primary focus:border-brand"
        placeholder="enter your username"
        label="username"
        name="username"
        type="text"
        required
         onChange={(e)=>setLoginData((prev) => ({...prev,username: e.target.value}))}
        
      />
    </div>
    <div>
      <Input
        className="outline-none border-2 rounded-md px-2 py-1 text-primary w-full focus:border-brand"
        placeholder="Password"
        label="password"
        name="password"
        type="password"
        required
          onChange={(e)=>setLoginData((prev) => ({...prev,password: e.target.value}))}
      />
          {error && (
            <p className='text-red'>
              {error.data?.message || "Something went wrong!"}
            </p>
          )}
    </div>
    <Button
      secondary
      className='w-full justify-center py-1 hover:bg-bage hover:text-primary active:scale-105 transition-all text-white '
      id="login"
      name="login"
      type="submit"
    
    >
      Login
    </Button>
    <Link className="text-blue-500 font-medium hover:underline" href="#">Forgot Password</Link>
  </form>
</div>

   </div>
  )
}

export default Login
