import React from "react";
import LoginStyle from "./Login.module.scss";
export default function Login() {
  return (
    <div className={LoginStyle.container}>
      <div className={LoginStyle.login}>
        <div className={LoginStyle.headerTop}>Login</div>
        <div className={LoginStyle.input}>
          <input placeholder="Email" className={LoginStyle.inputField} />
          <input placeholder="Password" className={LoginStyle.inputField} />
        </div>
        <div className={LoginStyle.buttonHolder}>
          <button type="submit" className={LoginStyle.button}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
