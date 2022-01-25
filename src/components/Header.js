import React, { useState } from 'react';
import * as data from '../data';

export default function Header() {
    const [count,setCount] = useState(1);

    const displayMenu = () => {
        setCount( (prevCount) => prevCount + 1)
    }

    return <header className='bg-white flex justify-center align-center absolute z-10 top-0 left-0 right-0 h-16 px-8 lg:h-20 lg:px-20 xl:px-40'>
        <img src={data.menus[0]} alt={data.altText[0]} className='mr-auto self-center' />
        <img onClick={displayMenu} src={ count % 2 === 0 ? data.menus[3] : data.menus[2]} alt="" className='ml-auto self-center cursor-pointer md:hidden' /> 
        { count % 2 === 0 ?  data.navHtmlMobile : data.navHtmlDesktop }
        <button type='button' className='bg-gradient-to-r from-lime-green to-bright-cyan text-white ml-auto px-6 py-3 rounded-full self-center transition hidden md:block hover:brightness-105'>Request Invite</button>  
    </header>;
}




