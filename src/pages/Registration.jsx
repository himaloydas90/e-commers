import React from 'react'
import Input from '../component/ui/input'
import { Link } from 'react-router'
import Button from '../component/ui/button'

const Registration = () => {
  return (
   <div className='flex justify-center items-center h-screen'>
<div
  className="w-lg rounded-lg shadow h-auto p-6 bg-white relative overflow-hidden"
>
  <div className="flex flex-col justify-center items-center space-y-2">
    <h2 className="text-2xl font-medium text-primary">SIGN UP</h2>
  </div>
  <form className="w-full mt-4 space-y-3">
    <div>
      <Input
        className="outline-none border-2 rounded-md px-2 py-1 text-primary w-full focus:border-brand"
        placeholder="Enter your eamil/username"
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
      className='w-full justify-center py-1 hover:text-primary active:scale-105 transition-all text-white '
      id="login"
      name="login"
      type="submit"
    >
      Creat account
    </Button>
    <p className="flex justify-center space-x-1">
         <span className="text-primary"> Have an account? </span>
         <Link to="/Login" className="text-brand hover:underline" href="#">Login</Link>
         </p>
  </form>
</div>

   </div>
  )
}
 
    
export default Registration;
