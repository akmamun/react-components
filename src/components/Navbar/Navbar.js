import React, { Component } from "react";
import NavbarStyles from "./Navbar.module.scss";

export default class Navbar extends Component {
  render() {
    return (
      <div className={NavbarStyles.container}>
        <div className={NavbarStyles.Navbar}>
          <div className={NavbarStyles.logo}>
            Logo
          </div>
          <div>
            <ul className={NavbarStyles.NavItems}>
              <li>Home</li>
              <li>Technologies</li>
              <li>Case Studies</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className={NavbarStyles.search}>
            <img
              src="https://www.iconfinder.com/data/icons/hawcons/32/698956-icon-111-search-512.png"
              className={NavbarStyles.searchIcon}
              alt="search"
            />
            <input
              type="text"
              placeholder="Search"
              className={NavbarStyles.searchInput}
            />
          </div>
        </div>
      </div>
    );
  }
}
