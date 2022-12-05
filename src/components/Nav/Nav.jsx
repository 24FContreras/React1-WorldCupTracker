import { useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <nav>
      <div className="nav-head">
        <p>
          <i className="fa-regular fa-futbol"></i> WORLD CUP TRACKER
        </p>
        <button
          className={isExpanded ? "burger expanded" : "burger"}
          onClick={() => setIsExpanded(isExpanded ? false : true)}
        >
          <i class="fa-solid fa-bars fa-xl"></i>
        </button>
      </div>

      <ul className={isExpanded ? "nav-links expanded" : "nav-links"}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#today">Playing today</a>
        </li>
        <li>
          <a href="#playoffs">Elimination Bracket</a>
        </li>
        <li>
          <a href="#matchlist">Match list</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
