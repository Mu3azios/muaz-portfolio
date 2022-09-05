import React from "react";
import "./services.css";
import { FiCheck } from "react-icons/fi";
export const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer </h5>
      <h2>Services and Skills</h2>

      <div className="container services__container">
        <article className="services">
          <div className="services__head">
            <h3>Non-Technical</h3>
          </div>
          <ul className="service__list">
            <li>
              <FiCheck className="service_list-icon" />
              <p>Problem Solving</p>
            </li>
            <li>
              <FiCheck className="service_list-icon" />
              <p>Critical Thinking</p>
            </li>
            <li>
              <FiCheck className="service_list-icon" />
              <p>Time Management</p>
            </li>
            <li>
              <FiCheck className="service_list-icon" />
              <p>Communication Skills</p>
            </li>
            <li>
              <FiCheck className="service_list-icon" />
              <p>Collaboration</p>
            </li>
            <li>
              <FiCheck className="service_list-icon" />
              <p>Interpersonal Skills</p>
            </li>
          </ul>
        </article>
        {/* web development  */}
        <article className="services">
          <div className="services__head">
            <h3>Technical</h3>
          </div>
          <ul className="service__list">
            <li>
              <FiCheck className="service_list-icon" />
              <p>Write clean, high quality and maintainable code.</p>
            </li>
            <li>
              <FiCheck className="service_list-icon" />
              <p>Responsive Web Design</p>
            </li>
            <li>
              <FiCheck className="service_list-icon" />
              <p>Debugging and Troubleshooting</p>
            </li>
            <li>
              <FiCheck className="service_list-icon" />
              <p>Develop, Test, Apply New Technologies</p>
            </li>
            <li>
              <FiCheck className="service_list-icon" />
              <p>Involve All Aspects Of The Software Development Life Cycle</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};
export default Services;
