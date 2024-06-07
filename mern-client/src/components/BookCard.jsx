import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { FaCartShopping } from 'react-icons/fa6'



// import required modules
import { Pagination } from 'swiper/modules';
import { FaBookSkull } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export default function BookCard({headline, books}) {
  return (
    <>
    <div className='my-16 px-4 lg:px-24'>
      <h2 className="text-5xl text-center font-bold text-black my-5">{headline}</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-full "
      >
        {
          books.map(book=> <SwiperSlide key={book._id}> 
          <Link to={`/book/${book._id}`}>
            <div className='relative '>
              <img src={book.imageURL} alt="" />
              <div className='absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded'>
                <FaCartShopping className='w-4 h-4 text-white'/>
              </div>
            </div>
            <div className='text-center '>
              {book.bookTitle}
              <p>{book.authorName}</p>
              <p>10$</p>
            </div>
          </Link>
          </SwiperSlide>)
        }

        
        
      </Swiper>
    </div>
    </>
  );
}