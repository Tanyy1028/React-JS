import React from 'react'

import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import Menu from '../../components/Menu/Menu'
import Book from '../../components/Booking/Book'




export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Menu/>
      <Book/>
    </>
  )
}

