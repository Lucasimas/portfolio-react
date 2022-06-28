import React from "react";
import "./about.css";
import ME from "../../assets/eu-removebg-preview.png"; //tem q ser jpg

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
              <small>1 ano de Experiência</small>
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
            distinctio repellendus cumque ad, voluptates libero voluptate
            officia, recusandae explicabo laudantium magnam eius dolore facilis
            aspernatur assumenda illum? Ratione, beatae. Aut!
          </p>

          <a href="#contact" className="btn btn-primary">Vamos conversar!</a>

        </div>
      </div>
    </section>
  );
};

export default About;
