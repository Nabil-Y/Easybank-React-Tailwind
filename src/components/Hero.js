import React from 'react';
import mockup from '../images/image-mockups.png';
import * as data from './data';

export default function Hero() {
  return <section className='bg-gray-light md:flex '>
    <div className=' md:order-2 md:w-1/2 bg-[url("../images/bg-intro-mobile.svg")] md:bg-[url("../images/bg-intro-desktop.svg")] bg-no-repeat bg-bottom md:bg-left md:bg-auto bg-contain'>
    <img src={mockup} alt="" className=' md:scale-125  md:translate-y-10 md:translate-x-10 2xl:translate-x-40' />
    </div>
    <div className='py-10 px-4 md:px-0 my-auto md:mr-16 md:mt-32 2xl:mt-60 md:flex md:flex-col md:w-1/2 ' >
      <h1 className='ml-8 lg:ml-20 xl:ml-40 py-4 text-4xl xl:text-5xl text-dark-blue md:text-left xl:w-1/2'>{data.heroText[0]}</h1>
      <p className=" ml-8 lg:ml-20 xl:ml-40 py-4 text-grayish-blue md:text-left xl:w-1/2 ">{data.heroText[1]}</p>
      <button type='button' className='hover:brightness-105 ml-8 lg:ml-20 xl:ml-40 my-4 px-6 py-3 text-white rounded-full bg-gradient-to-r from-lime-green to-bright-cyan self-start'>Request Invite</button>
    </div>

  </section>;
}


