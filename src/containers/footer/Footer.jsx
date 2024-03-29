import React from "react";
import gpt3Logo from "../../assets/logo.svg";
import "./footer.css";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding section__max-width">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step into the future before others?
        </h1>
        <div className="gpt3__footer-btn">
          <p>Request Early Access</p>
        </div>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            nulla.
          </p>
        </div>

        <div className="gpt3__footer-links_div">
          <h3>Links</h3>
          <p>Overall</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>
            By{" "}
            <a className="gradient__text" href="https://github.com/abanicaisse">
              Aba Nicaisse
            </a>
          </p>
        </div>

        <div className="gpt3__footer-links_div">
          <h3>Company</h3>
          <p>Overall</p>
          <p>Social Media</p>
          <p>
            Contact -{" "}
            <a className="gradient__text" href="https://github.com/abanicaisse">
              Aba Wandjovu Nicaisse
            </a>
          </p>
        </div>

        <div className="gpt3__footer-links_div">
          <h3>Get in touch</h3>
          <p>Overall</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>
            Coded by{" "}
            <a className="gradient__text" href="https://github.com/abanicaisse">
              Aba Nicaisse
            </a>
          </p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>
          @copyright 2024 -{" "}
          <a className="gradient__text" href="https://github.com/abanicaisse">
            Aba Wandjovu Nicaisse
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
