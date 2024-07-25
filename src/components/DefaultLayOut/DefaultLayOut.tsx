import React from 'react'
import Header from './Header/Header.tsx'
import Footer from './Footer/Footer.tsx'
import {scrollToTop} from "../../ultils/scrollTop.js"
import { FaArrowCircleUp } from "react-icons/fa";
 export default  function DefaultLayOut ({children}) {
  return (
    <div className='Page relative bg-[#f5f5f5] top-[110px] ]'>
        <Header/>
        <main className='mainPage min-h-[100vh] w-[1100px] mx-auto pt-[10px] '>
          {children}
        </main>
        <Footer/>
          <FaArrowCircleUp  onClick={scrollToTop} className='text-[3rem] hover:text-[red] fixed right-[10px] bottom-[40px] '/>
    </div>
  )
}
