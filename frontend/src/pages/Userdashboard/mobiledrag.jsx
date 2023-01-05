import React from 'react'
import user1 from "./images/Vector (2).png";
import pdf from "./images/Vector (3).png";
import news from "./images/Vector (4).png";
import calc from "./images/Vector (5).png";
import arrow from "./images/Vector (11).png";
import settings from "./images/Vector (15).png";

const mobiledrag = () => {
  return (
    <div>
            <ul className="flex-list">
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
    </div>
  )
}

export default mobiledrag