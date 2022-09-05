import React from 'react';
import './portfolio.css';
import AI2 from "../../assets/AI2.jpg";
import Laravel from "../../assets/Laravel.jpg";
import protfolio from "../../assets/portfolio.jpeg";
import cunsruction from "../../assets/construction.jpg";
import achievement from "../../assets/achievement.jpg";

const data = [
  {
    id:1,
    image:AI2,
    title:'Ai Based security system with face recognition',
    github:'https://github.com/Mu3azios/Face-recognition-home-security-system',
  },
  {
    id:2,
    image:Laravel,
    title:'Laravel CRUD Application',
    github:'https://github.com/Mu3azios/crud-laravel-',
  },
  {
    id:3,
    image:achievement,
    title:'My Portfolio in React JS',
    github:'https://github.com/Mu3azios/muaz-portfolio',
  },
  {
    id:4,
    image:cunsruction,
    title:'Chat Appication Using MERN JS',
    github:'',
  }
]



export const Portfolio = () => {
  return (


    <section id='portfolio'>
      <h5>My recent Work</h5>
      <h2>Projects</h2>


    <div className='container portfolio__container'>
      {
        data.map(({id, image, title, github}) => {
          return(
            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
          <img src={image} alt={title} className="portfolio-pic"/>
            </div>
            <div className='portfolio-text'>
                <h3>{title} </h3>
            </div>
             <div className='portfolio__item-cta'>
               <a href={github} className='btn' target="_blank">Github</a>
               {/* <a href='https://github.com' className='btn btn-primary'>Live Demo</a> */}
             </div>
          </article>
          )
        })
      }
   

    </div>
    </section>
  )
}
export default Portfolio