import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
  return (
    <section className='z-50 w-full bg-slate-700 flex flex-col'>
        <Link to="/" className="text-3xl font-bold text-white" >Nikesh Pandey</Link>
        <hr className='mt-2 mb-2' />
        <div className='sticky top-0 w-full flex items-center justify-center flex-row gap-4 '>
        <NavLink to="/" className="text-xl font-mono text-white m-2 hover:text-slate-300">Home</NavLink>
        <NavLink to="/about" className="text-xl font-mono text-white m-2 hover:text-slate-300">About</NavLink>
        <NavLink to="/articles" className="text-xl font-mono text-white m-2 hover:text-slate-300">Articles</NavLink>
        </div>
    </section>
  )
}

export default Header