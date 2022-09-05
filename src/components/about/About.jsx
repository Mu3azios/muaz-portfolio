import React from "react";
import programming from "../../assets/programming.jpg";
import "./about.css";
import { FaCode } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { FaAward } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import award from "../../assets/conference-certificate-Muaz-Baytamouny.pdf"
import testimonial from "../../assets/Muaz's-Testimonial.pdf"
 
export const About = () => {
  return (
    <section id="about">
  
        <h5>Get To Know</h5>
        <h2>About Me</h2>
    

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={programming} alt=""></img>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <MdSchool className="about__icon" />
              <h5>ُEducation</h5>
              <small>UCSI University</small>
            </article>

            <article className="about__card">
              <FaCode className="about__icon" />
              <h5>Experience</h5>
              <small>1 year experience</small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Awards</h5>
              <small><a href={award} target="_blank">Click to view</a></small>
            </article>

            <article className="about__card">
              <AiFillLike className="about__icon" />
              <h5>Testimonials</h5>
              <small><a href={testimonial} target="_blank">Click to view</a></small>
            </article>
          </div>
          <p className="text-light">
            A dedicated individual with in-depth knowledge of programming
            languages and development tools looking for a position at a company
            with a growth mindset where I can use my abilities to the company's
            advantage while still having room to grow professionally.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;
