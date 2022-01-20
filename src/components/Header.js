import React from 'react';
import logo from '../images/logo.svg'
import hamburger from '../images/icon-hamburger.svg'

export default function Header() {
  return <header className='flex'>
      <img src={logo} alt="" />
      <nav className='hidden sm:block'>
        <a href="#" className='no-underline text-inherit text-grayish-blue'>Home</a>
        <a href="#" className='no-underline text-inherit text-grayish-blue'>About</a>
        <a href="#" className='no-underline text-inherit text-grayish-blue'>Contact</a>
        <a href="#" className='no-underline text-inherit text-grayish-blue'>Blog</a>
        <a href="#" className='no-underline text-inherit text-grayish-blue'>Careers</a>
      </nav> 
      <button type='button' className='hidden sm:block px-2 py-1 bg-gradient-to-r from-lime-green0 to-bright-cyan'>Request Invite</button>
      <img src={hamburger} alt="" className='sm:hidden' />   
  </header>;
}




