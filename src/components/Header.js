import React from 'react';
import logo from '../images/logo.svg'
import hamburger from '../images/icon-hamburger.svg'

export default function Header() {
    const navText = ["Home","About","Contact","Blog","Careers"];
    return <header className='bg-white z-10 absolute top-0 left-0 right-0 h-20 flex justify-center align-center px-8 lg:px-40'>
        <img src={logo} alt="" className='mr-auto self-center' />
        <nav className='hidden md:flex'>
            {navText.map( item => <a href="#" className='flex h-20 mx-2 lg:mx-3 my-auto no-underline text-grayish-blue align-middle border border-transparent border-4 hover:border-b-lime-green'><span className='my-auto'>{item}</span></a> )}
        </nav>
        <button type='button' className=' ml-auto hidden md:block px-6 py-3 text-white rounded-full bg-bright-cyan self-center'>Request Invite</button>
        <img src={hamburger} alt="" className='md:hidden ml-auto self-center cursor-pointer' />   
    </header>;
}




