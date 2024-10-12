import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>

    <nav className='flex justify-end'>
        <ul className='flex gap-10'>
            <li>
                <Link to='#'> home</Link>
            </li>
            <li>
                <Link to='#'> home</Link>
            </li>
            <li>
                <Link to='#'> home</Link>
            </li>
            <li>
                <Link to='#'> home</Link>
            </li>
            <li>
                <Link to='#'> home</Link>
            </li>
        </ul>
    </nav>
      
    </>
  )
}

export default Navbar
