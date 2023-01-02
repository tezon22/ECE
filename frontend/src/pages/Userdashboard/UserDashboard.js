import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./UserDashboard.css";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../../features/auth/authSlice";
import user1 from "./images/Vector (2).png";
import pdf from "./images/Vector (3).png";
import news from "./images/Vector (4).png";
import calc from "./images/Vector (5).png";
import arrow from "./images/Vector (11).png";
import timetable from "./images/Vector (6).png";
import calc_2 from "./images/Vector (7).png";
import pdf_2 from "./images/Vector (8).png";
import news_2 from "./images/Vector (9).png";
import arrow_2 from "./images/Vector (10).png";
import footer_img from "./images/image 16.png";
import settings from "./images/Vector (15).png";

const UserDashboard = () => {
  const [arrows, setArrows] = useState(false);
  const dragged = () => {
    setArrows(!arrows);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(reset());
  }, [user, navigate, dispatch]);

  return (
    <div>
      <Navbar />
      <div className={arrows ? "extend" : "full-container full-grid"}>
        <nav className="nav-bar">
          <h1>Dashboard</h1>
          <img className="arrr" src={arrow} alt=" " />
          <ul className={arrows ? "dragged" : "flex-list"}>
            <li>
              <img src={user1} alt="user" />
              <a href="google.com">Profile</a>
            </li>
            <li>
              <img src={pdf} alt="pdf" />
              <a href="google.com">P.D.F's</a>
            </li>
            <li>
              <img src={news} alt="news" />
              <a href="google.com">News</a>
            </li>
            <li>
              <img src={calc} alt="calc" />
              <a href="google.com">Calculator</a>
            </li>
            <li>
              <img src={settings} alt="settings" />
              <a href="google.com">Settings</a>
            </li>
          </ul>
          <button
            onClick={dragged}
            className={arrows ? "dragg" : "drag-button"}
          >
            Activities <img src={arrow} alt=" " />
          </button>
        </nav>

        <main className="main-container">
          <header className="main-header">
            <Link to="/profilescreen">
              <img src={user1} alt="user" />
            </Link>
            <p>7th July, 2022.</p>
            <h1>Hello,{user && user.name} </h1>
          </header>

          <section className="grid-section">
            <a href="google.com" className="grid-tiles">
              <img src={news_2} alt=" " />
              <p>News update</p>
              <img src={arrow_2} alt=" " />
            </a>

            <Link to="/ebook" className="grid-tiles">
              <img src={pdf_2} alt=" " />
              <p>P.D.F / E-books</p>
              <img src={arrow_2} alt=" " />
            </Link>

            <a href="google.com" className="grid-tiles">
              <img src={calc_2} alt=" " />
              <p>Calculate C.G.P.A</p>
              <img src={arrow_2} alt=" " />
            </a>

            <Link to="/timetable" className="grid-tiles">
              <img src={timetable} alt=" " />
              <p>Time table</p>
              <img src={arrow_2} alt=" " />
            </Link>
          </section>

          <article className="footer-img-article">
            <img
              className="footer-img"
              src={footer_img}
              alt="Imge Expression"
            />
            <img
              className="footer-img"
              src={footer_img}
              alt="Imge Expression"
            />
            <img
              className="footer-img"
              src={footer_img}
              alt="Imge Expression"
            />
          </article>
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
