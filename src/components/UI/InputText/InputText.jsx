import React from "react";
import styles from "./InputText.module.scss";
import mail from "./../../../assets/icons/ic-contact-mail.svg";

const InputText = (props) => {
  return (
    <div className={styles.container}>
      <label className={styles.title} htmlFor="input">
        {props.title}
      </label>
      <input className={styles.input} id="input" type="text" />
      <img className={styles.input_img} src={mail} alt="mail" />
    </div>
  );
};

export default InputText;
