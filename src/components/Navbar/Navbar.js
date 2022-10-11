// import "./Navbar.css";
// import { FaReact, FaSearch } from "react-icons/fa";
// import { Link } from "react-router-dom";
// export const Navbar = () => {
//   return (
//     <div className="Navbar-container">
//       <div className="navbar-icon-container">
//         <FaReact />
//         <span className="navbar-icon-text">React</span>
//       </div>
//       <nav className="navbar-list-container">
//         <Link to="/" className = "tagnames">
//           Docs
//         </Link>
//         <Link to="/Tutorial" className = "tagnames" >
//           Tutorials
//         </Link>
//         <Link to="/Blog" className = "tagnames">
//           Blog
//         </Link>
//         <Link to="/Community" className = "tagnames">
//           Community
//         </Link>
//       </nav>
//       <div className="navbar-search-container">
//         <span className="icon">
//           <FaSearch />
//         </span>
//         <input className="input-field" type="text" placeholder="Search" />
//       </div>
//     </div>
//   );
// };
// export default Navbar;



import { FaReact } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
import { useState } from "react";
const Navbar = () => {
  const NavbarData = [
    { link: "/", title: "Docs" },
    { link: "/tutorial", title: "Tutorial" },
    { link: "/blog", title: "Blog" },
    { link: "/community", title: "Community" },
  ];

  const [isActive, setIsActive] = useState(0);
  const toggle = (i) => {
    setIsActive(i);
  };

  return (
    <div className="navbar-nav-container">
      <Link className="Navbar-logo">
        <FaReact className="logo" />
        <span>React</span>
      </Link>
      <nav className="navbar-link-container">
        {NavbarData.map((item, i) => (
          <div className={isActive === i ? "selected-navbar-link" : "unselected-navbar-link"}>
            <Link
              onClick={() => toggle(i)}
              className={isActive === i ? "selected-link" : "unselected-link"}
              to={item.link}
            >
              {item.title}
            </Link>
          </div>
        ))}
      </nav>
      <span className="navbar-search">
        <BiSearch className="logo" />
        <input type="search" placeholder="Search" />
      </span>
    </div>
  );
};

export default Navbar;