import { Link } from 'react-router-dom'
import './Navbar.css'
import React from 'react'

function Navbar() {
    return (
        <nav className='flex justify-center items-center p-11 gap-8 font-bold text-lg'>
            <Link to="/" className='mr-auto pl-2.5'>
                <h3>Namensy</h3>
            </Link>
            <Link to="/Home">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Blogs" className='mr-5'>Blogs</Link>
        </nav>
    )
}

export default Navbar