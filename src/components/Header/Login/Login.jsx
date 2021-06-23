import React from "react";
import styles from "./Login.module.scss";
import login from "../../../assets/icons/ic-actions-user.svg";


const Login = (props) => {
  
  return (
    <div>
      <img className={styles.login} src={login} alt="login" 
      />
    </div>
  );
};

export default Login;
