import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='sticky top-0 z-50 bg-white flex shadow-md'>
      <div className='flex justify-center flex-grow'>
          <div className='flex space-x-6 md:space-x-8 p-5 md:p-5'>
              <NavLink to='/' className='font-bold text-xl tracking-widest'>FAKE STORE API</NavLink>
          </div>
      </div>
    </div>
  )
}

export default Navbar;