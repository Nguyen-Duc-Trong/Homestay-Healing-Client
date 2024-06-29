import React from 'react'
import HeaderTop from './HeaderTop/HeaderTop.tsx'
import Navbar from './Navbar/NavBar.tsx'

const Header = () => {

  return (
    <header  className='header w-[100%] min-h-[100px] bg-white fixed  z-[1000] top-[0]'>
      <HeaderTop/>
      <Navbar  setNav="bg-[#3e4095]"/>
    </header>
  ) 
}

export default Header