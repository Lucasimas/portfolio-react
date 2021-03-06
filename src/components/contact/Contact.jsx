import React from 'react'
import './contact.css'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_laxfl3k', 'template_kbm2z47', form.current, 'YFf69CH78Xn-rZtCL')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };



  return (
    <section id='contact'>
      <h5>Entre em contato</h5>
      <h2>Vamos conversar!</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>E-mail</h4>
            <h5>Lucas.bsimas@hotmail.com</h5>
            
            <a href="mailto:lucas.bsimas@hotmail.com" target="_blank" >Mande uma mensagem!</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+55 (11)99524-7767</h5>
            <a href="https://wa.me/+5511995247767" target="_blank" >Mande uma mensagem!</a>
          </article>

          <article className="contact__option">
            <BsLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Lucas Simas</h5>
            <a href="https://www.linkedin.com/in/lucas-simas-5312a4113/"  target="_blank">Mande uma mensagem!</a>
          </article>
        </div>
        {/* Fim opções de contato */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Nome' required />
          <input type="email" name='email' placeholder='Email' required />
          <textarea name="message" rows="7" placeholder='Escreva uma mensagem' required ></textarea>
          <button type='submit' className='btn btn-primary'>Enviar</button>
        </form>

      </div>


    </section>
  )
}

export default Contact