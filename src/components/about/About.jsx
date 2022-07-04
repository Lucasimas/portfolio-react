import React from "react";
import "./about.css";
import ME from "../../assets/Imagem2-removebg-preview.png"; //tem q ser jpg

import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>Sobre mim</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Imagem pessoal" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiências</h5>
              <small>3</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clientes</h5>
              <small>2</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projetos</h5>
              <small>2</small>
            </article>
          </div>

          <p>
            Sou Lucas Simas, nascido em Assis -interior de SP -, tenho 22 anos,
            graduado em Sistemas de Informação pela UNINOVE, moro em
            Carapicuíba-SP e sou um grande intusiasta do mundo Front-end! :D
            <br />
            <br />
            Ao longo da minha jornada no mundo de TI atuando como Desenvolvedor,
            pude aprimorar meus conhecimentos técnicos com grandes projetos de
            clientes como Bradesco e Hospital das Clícnicas (HCRP-USP).
          </p>

          <a href="#contact" className="btn btn-primary">
            Saiba mais!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
