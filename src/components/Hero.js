import React from 'react';
import mockup from '../images/image-mockups.png';
import * as data from '../data';

export default function Hero() {
  return <section className='bg-gray-light md:flex '>
    <div className=' bg-[url("../images/bg-intro-mobile.svg")] bg-contain bg-no-repeat bg-bottom md:bg-[url("../images/bg-intro-desktop.svg")] md:order-2 md:w-1/2 md:bg-left md:bg-auto'>
    <img src={mockup} alt="" className=' md:scale-125  md:translate-y-10 md:translate-x-10 2xl:translate-x-40' />
    </div>
    <div className='py-10 px-4 my-auto md:flex md:flex-col md:w-1/2 md:px-0 md:mr-16 md:mt-32 xl:mt-48 2xl:mt-60' >
      <h1 className='text-dark-blue text-4xl py-4 md:ml-8 lg:ml-20 xl:ml-40 xl:text-5xl md:text-left xl:w-2/3'>{data.heroText[0]}</h1>
      <p className='text-grayish-blue py-4 md:ml-8 md:text-left lg:ml-20 xl:ml-40 xl:w-1/2'>{data.heroText[1]}</p>
      <button type='button' className='bg-gradient-to-r from-lime-green to-bright-cyan text-white my-4 px-6 py-3 rounded-full self-start transition md:ml-8 lg:ml-20 xl:ml-40 hover:brightness-105'>Request Invite</button>
    </div>

  </section>;
}


