import React from 'react';
import NavLinks from './NavLinks';
import NavLink from './NavLink';
import NavBtn from './NavBtn';
import NavToggle from './NavToggle';

export default function Navbar() {
  return (
    <nav className='w-full h-12 pt-4 flex justify-center items-center'>
      <NavToggle />
      <NavLinks>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/projects'>Projects</NavLink>
        <NavLink to='/blog'>Blog</NavLink>
        <NavBtn to='/contact'>Contact</NavBtn>
      </NavLinks>
    </nav>
  );
}
