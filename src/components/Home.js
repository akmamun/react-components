import React from "react";
import { Link } from "react-router-dom";
import HomeStyle from "./Home.module.scss";
export default function Home() {
  return (
    <div className={HomeStyle.linkContainer}>
      <div>
        <Link to="/modal">Modal</Link>
      </div>
      <div>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}
