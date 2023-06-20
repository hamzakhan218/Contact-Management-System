import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-black text-white px-5'>
        <div className='grid md:grid-cols-3 grid-cols-1 align-middle'>
            <Link to={"/"}><h1 className='text-xl '>Contact Management System</h1></Link>
            <Link to={"/login"} className='text-xs align-bottom'><h1 className='h-full py-2'>LOGIN</h1></Link>
            <Link to={"/register"} className='text-xs align-bottom'><h1 className='align-bottom h-full py-2'>REGISTER</h1></Link>
        </div>
    </div>
  )
}

export default Navbar
