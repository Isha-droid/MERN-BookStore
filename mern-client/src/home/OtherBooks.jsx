import React from 'react'
import { useState , useEffect} from 'react'
import BookCard from '../components/BookCard'

const OtherBooks = () => {
    const [books,setBooks]= useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/all-books").then(res=> res.json()).then(data=> setBooks(data.slice(4,12)))
    },[])
  return (
    <div>
      <BookCard books={books} headline={"Other books"}/>
    </div>
  
  )
}

export default OtherBooks
