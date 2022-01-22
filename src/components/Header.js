import React from 'react';
import * as data from './data';

export default function Header() {
    return <header className='bg-white z-10 absolute top-0 left-0 right-0 h-16 lg:h-20 flex justify-center align-center px-8 lg:px-20 xl:px-40'>
        <img src={data.menus[0]} alt="" className='mr-auto self-center' />
        <nav className='hidden md:flex'>
            {data.navText.map( item => <a key={item} href="#" className='relative flex h-20 mx-1 lg:mx-4 my-auto no-underline text-grayish-blue align-middle group'>
                    <span className='block my-auto'>{item}</span>
                    <span className='group-hover:opacity-100 opacity-0 absolute bottom-0 left-0 right-0 block h-[5px] bg-gradient-to-r from-lime-green to-bright-cyan transition' ></span>    
                </a> )}
        </nav>
        <button type='button' className=' hover:brightness-105 ml-auto hidden md:block px-6 py-3 text-white rounded-full bg-gradient-to-r from-lime-green to-bright-cyan self-center transition'>Request Invite</button>
        <img src={data.menus[2]} alt="" className='md:hidden ml-auto self-center cursor-pointer' />   
    </header>;
}




