import React from 'react';
import { useLoaderData } from 'react-router-dom';


function SingleBook() {
  const { _id, bookTitle, imageURL } = useLoaderData();

  return (
    <div className='mt-10 px-4 lg:px-24'>
      <div className='max-w-xl mx-auto'>
        <img src={imageURL} alt={bookTitle} className='w-full h-80 object-cover rounded-lg shadow-md mb-6' />
        <div className='bg-white p-6 rounded-lg shadow-md'>
          <h2 className='text-3xl font-semibold mb-4'>{bookTitle}</h2>
          <p className='text-gray-700'>{/* Additional book details can be displayed here */}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleBook;
