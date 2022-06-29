import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/lucas-simas-5312a4113/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/Lucasimas" target="_blank"><BsGithub /></a>
        <a href="https://www.instagram.com/luscasim/" target="_blank"><BsInstagram /></a>

    </div>
  )
}

export default HeaderSocials