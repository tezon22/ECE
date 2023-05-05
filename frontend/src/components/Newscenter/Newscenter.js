import React from "react";
import { Link } from "react-router-dom";
import "./Newscenter.css";
import Image4 from "./image 4.svg";

const Newscenter = () => {
  return (
    <div className="news_container">
      <div className="news_row">
        <div className="col_5">
          <h1>
            Stay <span>updated</span> everyday and everytime
          </h1>
          <p>
            Get steady information and news, lecture timetable updates, newly
            uploaded PDFs and more
          </p>
          <Link to="">News Center</Link>
        </div>
        <div className="col_6">
          <img src={Image4} alt="image4" />
        </div>
      </div>
    </div>
  );
};

export default Newscenter;
