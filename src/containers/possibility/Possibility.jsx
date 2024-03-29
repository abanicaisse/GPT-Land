import React from "react";
import "./possibility.css";

import PossibilityImage from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div
      className="gpt3__possibility section__padding section__max-width"
      id="possibility"
    >
      <div className="gpt3__possibility-image">
        <img src={PossibilityImage} alt="Possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request early access to get Started</h4>
        <h1 className="gradient__text">
          The possibility are behond our imaginations
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa iste
          blanditiis voluptate odit similique hic porro corrupti quisquam,
          tempore accusamus!
        </p>
        <h4>Request early access to get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
