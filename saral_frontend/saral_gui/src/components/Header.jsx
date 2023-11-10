import React from 'react'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className='h-16 px-5 bg-white flex items-center justify-between sticky top-0 z-10'>
            <div className="flex items-center">
                <Link to="/" ><img src={logo} alt="logo" className='h-12 rounded-2xl'/></Link>
                <Link to="/" ><h1 className='text-4xl pl-2 leading-tight font-mono font-bold'><span>S</span>aral</h1></Link>
            </div>
            <div className='flex gap-5 items-center'>
                <h4 className='hover:text-green-500 font-medium'><Link to="/about">About</Link></h4>
                <h4 className='hover:text-green-500 font-medium'><Link to="/register">Register</Link></h4>
                <div className="flex -space-x-1 overflow-hidden">
                    <Link to="/signin">
                        <img
                            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                    </Link>
                </div>
                
            </div>
        </div>
      )
}

export default Header