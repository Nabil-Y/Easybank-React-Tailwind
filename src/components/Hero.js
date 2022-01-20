import React from 'react';
import mockup from '../images/image-mockups.png';
import '../style/Hero.css';

export default function Hero() {
    const heroText = ["Next generation digital banking", "Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more."];
  return <section className='bg-gray-light md:flex bg-[url("../images/bg-intro-mobile.svg")] md:bg-[url("../images/bg-intro-desktop.svg")] bg-no-repeat md:bg-right bg-contain'>
    <div className=" md:order-2">
    <img src={mockup} alt="" className=' md:scale-125  md:translate-y-10 md:translate-x-10' />
    </div>
    <div className='py-10 px-4 lg:px-40 my-auto md:mr-16 md:mt-32 md:flex flex-col'>
      <h1 className='py-4 text-4xl text-dark-blue md:text-left'>{heroText[0]}</h1>
      <p className="py-4 text-grayish-blue md:w-2/3 md:text-left">{heroText[1]}</p>
      <button type='button' className='my-4 px-6 py-3 text-white rounded-full bg-gradient-to-r from-lime-green to-bright-cyan self-start'>Request Invite</button>
    </div>

  </section>;
}


