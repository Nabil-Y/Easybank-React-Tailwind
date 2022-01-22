import React from 'react';
import * as data from '../data';

export default function Articles() {
  return <section className='bg-gray-light text-left py-16 md:px-8 lg:px-20 xl:px-40'>
        <h2 className='text-dark-blue text-4xl text-center py-4 lg:text-left'>Latest Articles</h2>
        <div className='pt-8 lg:flex'>
            {data.articlesContent.map(item => <article key={item.title} className='flex flex-col lg:mr-8 last:lg:mr-0'>
                <div className='bg-white mb-8 mx-auto rounded-lg overflow-hidden md:max-w-[400px] lg:flex-1 lg:mx-0 max-w-[300px] lg:max-w-none '>
                    <img src={item.picture} alt={item.pictureAlt} className='block w-full lg:h-[180px] xl:h-[200px]'/>
                    <div className="p-4">
                        <p className='text-grayish-blue text-[0.6rem]'>By {item.author}</p>
                        <a href="#"><h3 className='text-md text-dark-blue py-4 transition hover:text-lime-green'>{item.title}</h3></a> 
                        <p className='text-grayish-blue text-xs'>{item.description}</p>                   
                    </div>  
                </div>
            </article> )}
        </div>
  </section>;
}
