import React from 'react'
import { Footer } from 'flowbite-react';


const MyFooter = () => {
  return (
    <div>
      <Footer container>
      <Footer.Copyright href="#" by="Isha Mahajan : Book Portal" year={2024} />
      <Footer.LinkGroup>
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
    </div>
  )
}

export default MyFooter
