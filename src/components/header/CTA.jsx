import React from 'react'
import CV from '../../assets/CV - Dev. Web - Lucas Simas.pdf'


const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className="btn">Baixar CV</a>
        <a href="#contact" className="btn btn-primary">Vamos conversar!</a>
    </div>
  )
}

export default CTA