import "./Navbar.css";
import { FaReact, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="Navbar-container">
      <div className="navbar-icon-container">
        <FaReact />
        <span className="navbar-icon-text">React</span>
      </div>
      <nav className="navbar-list-container">
        <Link to="/" className="tagnames">
          Docs
        </Link>
        <Link to="/Tutorial" className="tagnames">
          Tutorials
        </Link>
        <Link to="/Blog" className="tagnames">
          Blog
        </Link>
        <Link to="/Community" className="tagnames">
          Community
        </Link>
      </nav>
      <div className="navbar-search-container">
        <span className="icon">
          <FaSearch />
        </span>
        <input className="input-field" type="text" placeholder="Search" />
      </div>
    </div>
  );
};
