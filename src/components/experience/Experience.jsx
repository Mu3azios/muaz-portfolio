import React from "react";
import "./experience.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
const Experience = () => {
  return (
    <section id="experience">
   
       
       <h2>MY Experience</h2>


      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiOutlineCheckCircle className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Expert</small>
              </div>
            </article>

            <article className="experience__details">
              <AiOutlineCheckCircle className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Expert</small>
              </div>
            </article>

            <article className="experience__details">
              <AiOutlineCheckCircle className="experience__details-icon" />
              <div>
                <h4>Java Script</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <AiOutlineCheckCircle className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Expert</small>
              </div>
            </article>

            <article className="experience__details">
              <AiOutlineCheckCircle className="experience__details-icon" />
              <div>
                <h4>React Js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* --------------  */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiOutlineCheckCircle className="experience__details-icon" />
              <div>
                <h4>Laravel</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <AiOutlineCheckCircle className="experience__details-icon" />
              <div>
                <h4>MYSQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <AiOutlineCheckCircle className="experience__details-icon" />
              <div>
                <h4>LiveWire</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <AiOutlineCheckCircle className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <AiOutlineCheckCircle className="experience__details-icon" />
              <div>
                <h4>Java</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <AiOutlineCheckCircle className="experience__details-icon" />
              <div>
                <h4>Java Script</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
