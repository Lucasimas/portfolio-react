import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";

// Não usar essas imagens em produção

// 4 Objetos de array
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency Dash & Fin Visualization',
    github: 'https://github.com/Lucasimas',
    demo: 'https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },

  {
    id: 2,
    image: IMG2,
    title: 'Crypto Currency Dash & Fin Visualization',
    github: 'https://github.com/Lucasimas',
    demo: 'https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },

  {
    id: 3,
    image: IMG3,
    title: 'Crypto Currency Dash & Fin Visualization',
    github: 'https://github.com/Lucasimas',
    demo: 'https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },

  {
    id: 4,
    image: IMG4,
    title: 'Crypto Currency Dash & Fin Visualization',
    github: 'https://github.com/Lucasimas',
    demo: 'https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Meus trabalhos recentes</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       
       {/* Usando mapeamento (tipo um ForEach) para cada item do fake back-end */}

        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
    
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank"> GitHub </a>
                <a href={demo} className="btn btn-primary" target="_blank"> Live Demo </a>
              </div>
            </article>
            )
          })
        }


      </div>
    </section>
  );
};

export default Portfolio;
