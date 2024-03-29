import React from "react";
import "./brand.css";
import { google, slack, atlassian, dropbox } from "./imports";

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding section__max-width">
      <div>
        <img src={google} alt="Google" />
      </div>
      <div>
        <img src={slack} alt="Slack" />
      </div>
      <div>
        <img src={atlassian} alt="Atlassian" />
      </div>
      <div>
        <img src={dropbox} alt="DropBox" />
      </div>
    </div>
  );
};

export default Brand;
