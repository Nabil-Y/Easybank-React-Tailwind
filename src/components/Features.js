import React from 'react';
import * as data from '../data';


export default function Features() {
  return <section className='bg-grayish-blue-light py-16 px-8 lg:px-20 lg:text-left xl:px-40 '>
        <h2 className='text-dark-blue text-4xl py-4'>{data.featuresText[0]}</h2>
        <p className="text-grayish-blue py-4 md:px-24 lg:px-0 lg:w-2/3 xl:w-1/2">{data.featuresText[1]}</p>
        <div className='py-8 mx-auto lg:flex'>
            {data.featuresContent.map(item => <div key={item.key} className='flex flex-col lg:mr-8 last:lg:mr-0'>
                <img src={item.imageUrl} alt="" className='py-6 self-center lg:self-start'/>
                <h3 className='text-dark-blue text-xl py-4'>{item.title}</h3>
                <p className='text-grayish-blue md:px-40 lg:px-0'>{item.text}</p>
            </div>)}
        </div>
  </section>;
}
