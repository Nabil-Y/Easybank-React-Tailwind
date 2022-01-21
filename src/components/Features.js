import React from 'react';
import * as data from './data';


export default function Features() {
  return <section className='bg-grayish-blue-light py-16 px-8 lg:px-20 xl:px-40 md:text-left'>
        <h2 className='text-4xl text-dark-blue py-4'>{data.featuresText[0]}</h2>
        <p className="text-grayish-blue py-4 md:w-2/3 xl:w-1/2">{data.featuresText[1]}</p>
        <div className='py-8 md:flex  '>
            {data.featuresContent.map(item => <div key={item.key} className='flex flex-col px-4 md:px-0 md:mr-8'>
                <img src={item.imageUrl} alt="" className='self-center md:self-start py-6'/>
                <h3 className='py-4 text-xl text-dark-blue'>{item.title}</h3>
                <p className='text-grayish-blue'>{item.text}</p>
            </div>)}
        </div>
  </section>;
}
