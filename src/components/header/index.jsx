import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";
function Header() {
  return (
    <div>
      {/* header */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink
                  activeClassName="active-nav-link"
                  className="nav-link"
                  to="/"
                  exact={true}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active-nav-link"
                  className="nav-link"
                  to="/movie-detail"
                >
                  Movie Detail
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active-nav-link"
                  className="nav-link"
                  to="/booking"
                >
                  Booking
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active-nav-link"
                  className="nav-link"
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
