import React from "react";
import styles from "../../UI/Form/Form.module.css";
import InputField from "../../../UI/Input/InputField";

const EditForm = () => {
  const handleInputChange = () => {};

  const handleBlur = () => {};

  return (
    <form className={styles.form} onSubmit={() => {}}>
      {/* <InputField
        type="text"
        label="имя"
        name="name"
        onChange={handleInputChange}
        validValues={validValues}
        onBlur={handleBlur}
      />
      <InputField
        type="password"
        label="фамилию"
        name="surname"
        onChange={handleInputChange}
        validValues={validValues}
        onBlur={handleBlur}
      />
      <InputField
        type="email"
        label="email"
        name="email"
        onChange={handleInputChange}
        validValues={validValues}
        onBlur={handleBlur}
      />
      <InputField
        type="password"
        label="пароль"
        name="password"
        onChange={handleInputChange}
        validValues={validValues}
        onBlur={handleBlur}
      /> */}
      <button type="submit" className="button">
        Отправить
      </button>
    </form>
  );
};

export default EditForm;
