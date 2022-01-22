import React from 'react';
import * as data from '../data';

export default function Header() {
    return <header className='bg-white flex justify-center align-center absolute z-10 top-0 left-0 right-0 h-16 px-8 lg:h-20 lg:px-20 xl:px-40'>
        <img src={data.menus[0]} alt="" className='mr-auto self-center' />
        <nav className='hidden md:flex'>
            {data.navText.map( item => <a key={item} href="#" className='text-grayish-blue relative flex h-20 mx-1 my-auto no-underline align-middle group lg:mx-4'>
                    <span className='block my-auto'>{item}</span>
                    <span className='bg-gradient-to-r from-lime-green to-bright-cyan block h-[5px] absolute bottom-0 left-0 right-0 opacity-0 transition group-hover:opacity-100' ></span>    
                </a> )}
        </nav>
        <button type='button' className='bg-gradient-to-r from-lime-green to-bright-cyan text-white ml-auto px-6 py-3 rounded-full self-center transition hidden md:block hover:brightness-105'>Request Invite</button>
        <img src={data.menus[2]} alt="" className='ml-auto self-center cursor-pointer md:hidden' />   
    </header>;
}




