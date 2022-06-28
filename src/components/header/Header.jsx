import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/eu-removebg-preview.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
    <div className="container header__container">
      <h5>Olá, sou</h5>
      <h1>Lucas Simas</h1>
      <h5 className="text-light">Desenvolvedor Front-end</h5>
      <CTA />
      <HeaderSocials /> 

      <div className="me">
        <img src={ME} alt="eu" />
      </div>

      <a href="#contact" className="scroll__down">Scroll Down</a>

    </div>
    </header>
  )
}

export default Header