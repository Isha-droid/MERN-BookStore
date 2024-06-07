import React from 'react';

function Banner() {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-12 py-14 w-full'>
        <div className='md:w-1/2 space-y-8 h-full'>
          <h2 className='text-5xl font-bold leading-snug text-black'>
            Buy and sell your books{' '}
            <span className='text-blue-700'>at best Prices</span>
          </h2>
          <p className='md:w-4/5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            beatae deserunt veniam aperiam voluptatibus rerum in officia sunt
            assumenda inventore provident nihil autem, aliquam accusantium
            necessitatibus magnam. Pariatur, temporibus incidunt.
          </p>
          <div className='flex items-center'>
            <input
              type='search'
              name='search'
              id='Serach'
              placeholder='Search A Book'
              className='py-2 px-2 rounded-s-sm outline-none'
            />
            <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>
              Search
            </button>
          </div>
        </div>
        <div>{/* Your other content goes here */}</div>
      </div>
    </div>
  );
}

export default Banner;
