import React, { useState } from "react";
import { Link } from "react-router-dom";
import timetable from "./images/Vector (6).png";
import calc_2 from "./images/Vector (7).png";
import pdf_2 from "./images/Vector (8).png";
import news_2 from "./images/Vector (9).png";
import arrow_2 from "./images/Vector (10).png";
import "./UserDashboard.css";


const DashboardSidebar = () => {
  // Declare a state variable for toggling the sidebar
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="relative flex gap-6 h-screen">
      {/* Button for toggling the sidebar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-0 left-0 p-2 rounded-full focus:outline-none focus:shadow-outline"
      >
        Toggle Sidebar
      </button>

      {/* Sidebar overlay */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } fixed top-0 left-0 w-64 bg-white h-screen z-50 shadow-xl`}
      >
        <div className="p-4">
          <h3 className="text-2xl font-bold mb-4">Sidebar</h3>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 bg-indigo-500 text-white rounded-full focus:outline-none focus:shadow-outline"
          >
            Close Sidebar
          </button>
        </div>
      </div>

      {/* Page content */}
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
    </div>
  );
};

export default DashboardSidebar;
