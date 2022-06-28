import React from "react";
import "./testimonials.css";

import AVTR1 from "../../assets/eu-removebg-preview.png";

// import Swiper core and required modules
import {  Pagination  } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// Comentários dinâmicos (array)
const data = [
  {
    avatar: AVTR1,
    nome: 'Nome Teste',
    comentario: 'Modi alias animi dolorem aliqum ea eum betea, consectur presentim quibsudam, comodi velit porro blanditus consequer qui molest. Dolerem perspicatis aspenart labore dinstictio retionare delectus'
  },
  {
    avatar: AVTR1,
    nome: 'Nome Teste',
    comentario: 'Modi alias animi dolorem aliqum ea eum betea, consectur presentim quibsudam, comodi velit porro blanditus consequer qui molest. Dolerem perspicatis aspenart labore dinstictio retionare delectus'
  },
  {
    avatar: AVTR1,
    nome: 'Nome Teste',
    comentario: 'Modi alias animi dolorem aliqum ea eum betea, consectur presentim quibsudam, comodi velit porro blanditus consequer qui molest. Dolerem perspicatis aspenart labore dinstictio retionare delectus'
  },
]

const testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Resumo dos Clientes</h5>
      <h2>Testemunhas</h2>

      <Swiper className="container testimonials__container" 
      // install Swiper modules
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}  >
        
      {
        data.map(({avatar, nome, comentario}, index) => {
          return (
            <SwiperSlide key={index}  className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt="Avatar" />
          </div>
            <h5 className="client__name">{nome}</h5>
            <small className="client__review">
             {comentario}
            </small>
        </SwiperSlide>
          )
        })
      }
          
      </Swiper>
    </section>
  );
};

export default testimonials;
