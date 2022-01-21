import React from 'react';
import * as data from './data';

export default function Footer() {
  return <footer className='bg-dark-blue py-12 px-8 lg:flex lg:px-20 xl:px-40'>
      <div className=''>
          <img src={data.menus[1]} alt='' className='mx-auto mb-8' />
        <ul className='flex justify-center lg:mt-14'>
            {data.socialIcons.map(item => <li key={data.socialIcons.indexOf(item)} className='mx-2'> 
                <a href="#">{item}</a> 
            </li> )}
        </ul>
      </div>
      <nav className=''>
        <ul className='py-8 lg:py-0 lg:flex lg:flex-col lg:flex-wrap lg:h-[130px] lg:text-left lg:mx-16'>
            {data.footerMenu.map(item => <li key={item} className='py-1 lg:mx-10'> 
                <a href="#" className='text-gray-light hover:text-lime-green hover:cursor-pointer'>{item}</a>
            </li> )}
        </ul>
      </nav>
      <div className='flex flex-col lg:ml-auto'>
        <button type='button' className='hover:brightness-105 my-2 px-6 py-3 text-white rounded-full bg-gradient-to-r from-lime-green to-bright-cyan self-center lg:self-end'>Request Invite</button>
        <p className='text-grayish-blue my-4'>{data.copyright}</p>
      </div>
  </footer>;
}
