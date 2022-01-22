import React from 'react';
import * as data from './data';

export default function Articles() {
  return <section className='bg-gray-light py-16 md:px-8 lg:px-20 xl:px-40 text-left'>
        <h2 className='text-4xl text-dark-blue py-4 text-center lg:text-left'>Latest Articles</h2>
        <div className='pt-8 lg:flex'>
            {data.articlesContent.map(item => <article key={item.title} className='flex flex-col lg:mr-8 last:lg:mr-0'>
                <div className='bg-white mb-8 rounded-lg overflow-hidden lg:flex-1 mx-auto lg:mx-0 max-w-[300px] md:max-w-[400px] lg:max-w-none '>
                    <img src={item.picture} alt="" className='block w-full lg:max-h-[220px]'/>
                    <div className="p-4">
                        <p className='text-grayish-blue text-[0.6rem]'>By {item.author}</p>
                        <a href="#"><h3 className='py-4 text-md text-dark-blue hover:text-lime-green'>{item.title}</h3></a> 
                        <p className='text-grayish-blue text-xs'>{item.description}</p>                   
                    </div>  
                </div>
            </article> )}
        </div>
  </section>;
}
