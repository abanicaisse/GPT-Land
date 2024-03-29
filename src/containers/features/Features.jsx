import React from "react";
import "./features.css";
import { Feature } from "../../components";

const featuresData = [
  {
    title: "Improve end Distrusts instantly",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus sunt, dolor accusantium expedita quae ab!",
  },
  {
    title: "Become the tended active",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus sunt, dolor accusantium expedita quae ab!",
  },
  {
    title: "Message or am nothing",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus sunt, dolor accusantium expedita quae ab!",
  },
  {
    title: "Really boy them country",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus sunt, dolor accusantium expedita quae ab!",
  },
];

const Features = () => {
  return (
    <div
      className="gpt3__features section__padding section__max-width"
      id="features"
    >
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now an YOu Just Need To Realize. Step into Future Today
          & Make it Happen.
        </h1>
        <p>Request Early Acces to Get Started</p>
      </div>

      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
