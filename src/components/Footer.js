import React from 'react';
import * as data from '../data';

export default function Footer() {
  return <footer className='bg-dark-blue py-12 px-8 lg:flex lg:px-20 xl:px-40'>
      <div className=''>
          <img src={data.menus[1]} alt='' className='mx-auto mb-8 lg:ml-0' />
        <ul className='flex justify-center lg:mt-14'>
            {data.socialIcons.map(item => <li key={data.socialIcons.indexOf(item)} className='mx-2'> 
                <a href="#"><span className='hidden'>{item["name"]}</span>{item["html"]}</a> 
            </li> )}
        </ul>
      </div>
      <nav className=''>
        <ul className='py-8 lg:flex lg:flex-col lg:flex-wrap lg:text-left lg:py-0 lg:h-[130px] lg:mx-16'>
            {data.footerMenu.map(item => <li key={item} className='py-1 lg:mx-10'> 
                <a href="#" className='text-gray-light transition hover:text-lime-green hover:cursor-pointer'>{item}</a>
            </li> )}
        </ul>
      </nav>
      <div className='flex flex-col lg:ml-auto'>
        <button type='button' className='bg-gradient-to-r from-lime-green to-bright-cyan text-white my-2 px-6 py-3 rounded-full self-center transition lg:self-end hover:brightness-105'>Request Invite</button>
        <p className='text-grayish-blue my-4'>{data.copyright}</p>
      </div>
  </footer>;
}
