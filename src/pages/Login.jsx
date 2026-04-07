import React from 'react'
import Input from '../component/ui/input'
import Button from '../component/ui/button'
import { Link } from 'react-router'

const Login = () => {
  return (
   <div className='flex justify-center items-center h-screen'>
<div
  className="w-lg rounded-lg shadow h-auto p-6 bg-white relative overflow-hidden"
>
  <div className="flex flex-col justify-center items-center space-y-2">
    <h2 className="text-2xl font-medium text-primary">Login</h2>
  </div>
  <form className="w-full mt-4 space-y-3">
    <div>
      <Input
        className="outline-none border-2 rounded-md px-2 py-1 text-primary focus:border-brand"
        placeholder="enter your eamil/username"
        id="username"
        name="username"
        type="email"
        required
      />
    </div>
    <div>
      <Input
        className="outline-none border-2 rounded-md px-2 py-1 text-primary w-full focus:border-brand"
        placeholder="Password"
        id="password"
        name="password"
        type="password"
        required
      />
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
