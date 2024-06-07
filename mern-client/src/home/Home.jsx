import React from 'react'
import Banner from '../components/Banner'
import FavouriteBooks from './FavouriteBooks'
import FavBook from './FavBook'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'
import Review from './Review'

function Home() {
  return (
    <div>
      <Banner/>
      <FavouriteBooks/>
      <FavBook/>
      <PromoBanner/>
      <OtherBooks/>
      <Review/>
    </div>
  )
}

export default Home
