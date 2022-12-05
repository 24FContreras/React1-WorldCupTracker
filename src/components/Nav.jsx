import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <div className="brand">
        <i className="fa-regular fa-futbol"></i> WORLD CUP TRACKER
      </div>
      <ul className="nav-links">
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
