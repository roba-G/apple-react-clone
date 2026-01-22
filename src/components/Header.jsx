import { useState } from "react";
// import { a } from "react-router-dom"; // Recommended for React apps
import logo from "../resources/images/icons/logo-sm.png";
import search from "../resources/images/icons/search-icon-sm.png";
import cart from "../resources/images/icons/cart-sm.png";

function Header() {
  // 1. Initialize state to track if menu is open
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  // 2. Function to toggle state
  const handleToggle = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <div className="nav-wrapper fixed-top">
      <div className="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            onClick={handleToggle} // 3. Add Click Handler
            aria-expanded={isNavExpanded}
            aria-label="Toggle navigation"
          >
            ☰
          </button>

          <a className="navbar-brand mx-auto" to="/">
            <img src={logo} alt="Apple Logo" />
          </a>

          {/* 4. Use a template literal to conditionally add the 'show' class */}
          <div
            className={`collapse navbar-collapse ${isNavExpanded ? "show" : ""}`}
          >
            <ul className="navbar-nav nav-justified w-100 nav-fill">
              <li className="nav-item">
                <a
                  className="nav-a"
                  to="/iphone"
                  onClick={() => setIsNavExpanded(false)}
                >
                  iphone
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-a"
                  to="/ipad"
                  onClick={() => setIsNavExpanded(false)}
                >
                  ipad
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-a"
                  to="/watch"
                  onClick={() => setIsNavExpanded(false)}
                >
                  watch
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-a"
                  to="/tv"
                  onClick={() => setIsNavExpanded(false)}
                >
                  tv
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-a"
                  to="/music"
                  onClick={() => setIsNavExpanded(false)}
                >
                  Music
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-a"
                  to="/support"
                  onClick={() => setIsNavExpanded(false)}
                >
                  Support
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-a"
                  to="/search"
                  onClick={() => setIsNavExpanded(false)}
                >
                  <img src={search} alt="Search" />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-a"
                  to="/cart"
                  onClick={() => setIsNavExpanded(false)}
                >
                  <img src={cart} alt="Cart" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
