import React from 'react'
import './services.css'

import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      
      <h5>O que eu ofereço</h5>
      <h2>Serviços</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Protótipos de Alta Fidelidade.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Pesquisas de Usuário.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design System.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Acessibilidade Web.</p>
            </li>
          </ul>
        </article>
        {/* Fim de UX/UI */}

        <article className="service">
          <div className="service__head">
            <h3>Desenvolvimento Web</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Criação de Layout.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Codificação (HTML, CSS, etc.).</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design Responsivo.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Utilização de Bibliotecas JS.</p>
            </li>
            
          </ul>
        </article>
        {/* Fim de Desenvolvimento Web */}

        <article className="service">
          <div className="service__head">
            <h3>Desenvolvimento Back-end</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Configuração de Servidor.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Banco de Dados.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>P.O.O (Progamação Orientada a Objetos).</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Arquitetura de Aplicação.</p>
            </li>
          </ul>
        </article>
        {/* Fim de Desenvolvimento Back-end */}
      </div>

    </section>
  )
}

export default Services