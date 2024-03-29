import React from "react";
import "./whatGPT3.css";
import { Feature } from "../../components";

const WhatGPT3 = () => {
  return (
    <div
      className="gpt3__whatgpt3 section__margin section__max-width"
      id="wgpt3"
    >
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title={"What is GPT3"}
          text={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus sunt, dolor accusantium expedita quae ab! adipisicing elit. Temporibus sunt, dolor accusantium expedita quae ab!"
          }
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>explore the libray</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title={"Chatbots"}
          text={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus sunt, dolor accusantium expedita quae ab!"
          }
        />
        <Feature
          title={"Knowledge based"}
          text={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus sunt, dolor accusantium expedita quae ab!"
          }
        />
        <Feature
          title={"Education"}
          text={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus sunt, dolor accusantium expedita quae ab!"
          }
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
