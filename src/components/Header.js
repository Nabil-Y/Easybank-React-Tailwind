import React from 'react';
import logo from '../images/logo.svg';
import hamburger from '../images/icon-hamburger.svg';
import * as data from './data';

export default function Header() {
    return <header className='bg-white z-10 absolute top-0 left-0 right-0 h-20 flex justify-center align-center px-8 lg:px-20 xl:px-40'>
        <img src={logo} alt="" className='mr-auto self-center' />
        <nav className='hidden md:flex'>
            {data.navText.map( item => <a key={item} href="#" className='flex h-20 mx-1 xl:mx-4 my-auto no-underline text-grayish-blue align-middle border border-transparent border-4 hover:border-b-lime-green'><span className='my-auto'>{item}</span></a> )}
        </nav>
        <button type='button' className=' ml-auto hidden md:block px-6 py-3 text-white rounded-full bg-gradient-to-r from-lime-green to-bright-cyan self-center'>Request Invite</button>
        <img src={hamburger} alt="" className='md:hidden ml-auto self-center cursor-pointer' />   
    </header>;
}




