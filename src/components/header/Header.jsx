import React from 'react';
import './header.css';
import CTA from './CTA';
import Social from './Social';
import me from "../../assets/me-removebg.png"
export const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Muaz Baytamouny</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <Social />
      <div className="me">
        <img src={me} alt="me" className='muaz'></img>
      </div>
    <a href='#contact' className='scroll__down'>Scroll Down</a>


      </div>
    </header>
  )
}
export default Header