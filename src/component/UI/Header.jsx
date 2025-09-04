import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg WorldAtlasNavbar">
        <div className="container">
          <Link className="navbar-brand" to="/">
            WorldAtlas
          </Link>
          <button
            className="navbar-toggler WorldAtlasNavbartoggler"
            type="button"
            onClick={toggleNav}
            aria-controls="navbarNav"
            aria-expanded={isNavOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div 
            className={`navbar-collapse justify-content-end ${isNavOpen ? 'show' : ''}`} 
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link 
                  className="nav-link active" 
                  aria-current="page" 
                  to="/"
                  onClick={closeNav}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className="nav-link active" 
                  to="/about"
                  onClick={closeNav}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className="nav-link active" 
                  to="/country"
                  onClick={closeNav}
                >
                  Country
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/contact"
                  onClick={closeNav}
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;