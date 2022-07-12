import React from 'react'
import './footer.css'

import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>PORTSIMAS</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#experience">Esperiências</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/lucas-simas-5312a4113/"><BsLinkedin /></a>
        <a href="https://www.instagram.com/luscasim/"><BsInstagram/></a>
      </div>

      <div className="footer__copyriht">
        <small>&copy; PORTSIMAS. Aprendendo cada dia mais!</small>
      </div>

    </footer>
  )
}

export default Footer