import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
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
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/country">
                  Country
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/contact"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Contact1
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