import React from "react";
import { Link } from "react-router-dom";
import HomeStyle from "./Home.module.scss";
export default function Home() {
  return (
    <div className={HomeStyle.linkContainer}>
      <h3>Component List</h3>
      <div>
        <ul>
          <li>
            <Link to="/modal">Modal</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/navbar">Navbar</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
