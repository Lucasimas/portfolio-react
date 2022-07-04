import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/todolist.jpg";
import IMG2 from "../../assets/PortmageDef.jpg";
import IMG3 from "../../assets/UiUxDesign.jpg";


// Não usar essas imagens em produção

// 4 Objetos de array
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Lista de Tarefas - React',
    github: 'https://github.com/Lucasimas/lista-de-tarefas',
   
  },

  {
    id: 2,
    image: IMG2,
    title: 'Portfolio Pessoal - React',
    github: 'https://github.com/Lucasimas/portfolio-react',
    
  },

  {
    id: 3,
    image: IMG3,
    title: 'Portfolio UX/UI - Case Covid-19',
    github: 'https://medium.com/@lucassimas_89215/o-in%C3%ADcio-de-um-ux-ui-designer-o-primeiro-portif%C3%B3lio-1db955b2c431'
    
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
                <a href={github} className="btn" target="_blank"> Dê uma olhada! </a>
              
                
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
