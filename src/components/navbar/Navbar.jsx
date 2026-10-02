import React from "react";
import "./navbar.css";
import DarkMode from "../DarkMode/DarkMode";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Film Vault</h1>

      <div className="nav-links">
        <DarkMode />
        <a href="#popular">Popular</a>
        <a href="#top_rated">Top Rated</a>
        <a href="#upcoming">Upcoming</a>
      </div>
    </div>
  );
};

export default Navbar;
