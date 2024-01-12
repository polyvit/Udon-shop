import React from "react";
import styles from "./InputField.module.css";

const InputField = ({ type, label, name, onChange, validValues, onBlur }) => {
  return (
    <div className={styles.group}>
      <input
        type={type}
        placeholder={`Введите ${label}`}
        name={name}
        autoComplete="off"
        required
        onChange={onChange}
        className={`${styles.input} ${
          validValues[name] ? "" : `${styles.invalid}`
        }`}
        onBlur={(e) => onBlur(e)}
      />
    </div>
  );
};

export default InputField;
