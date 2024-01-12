import React, { useState, Fragment } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import styles from "../../UI/Form/Form.module.css";
import { useDispatch } from "react-redux";
import {
  setUser,
  toggleFormType,
  toggleForm,
} from "../../features/authorization/user-slice";
import { validateInput } from "../../utils/common";
import InputField from "../../UI/Input/InputField";
import useForm from "./use-form";
import Form from "../../UI/Form/Form";

type AuthFormProps = {
  type: "login" | "signup" | "edit";
  text: string;
  buttonText: string;
};

const AuthForm: React.FC<AuthFormProps> = ({ type, text, buttonText }) => {
  const dispatch = useDispatch();
  const submitFunc = useForm(type);

  const [values, setValues] = useState(() => {
    // const initial = { email: "", password: "" };
    // return type === "signup" || type === "edit"
    //   ? { ...initial, name: "", surname: "" }
    //   : initial;
    return { email: "", password: "", name: "", surname: "" };
  });

  const [validValues, setValidValues] = useState(() => {
    // const initial = { email: true, password: true };
    // return type === "signup" || type === "edit"
    //   ? { ...initial, name: true, surname: true }
    //   : initial;
    return { email: true, password: true, name: true, surname: true };
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setValidValues({
      ...validValues,
      [event.target.name]: validateInput(event.target.value, event.target.name),
    });
  };

  const changeForm = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (type === "login") {
      dispatch(toggleFormType("signup"));
    } else {
      dispatch(toggleFormType("login"));
    }
  };

  return (
    <Form submitFunc={submitFunc} values={values} buttonText={buttonText}>
      {(type === "signup" || type === "edit") && (
        <Fragment>
          <InputField
            type="text"
            label="имя"
            name="name"
            onChange={handleInputChange}
            validValues={validValues}
            onBlur={handleBlur}
          />
          <InputField
            type="text"
            label="фамилию"
            name="surname"
            onChange={handleInputChange}
            validValues={validValues}
            onBlur={handleBlur}
          />
        </Fragment>
      )}
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
      />
      {text ? (
        <div className={styles.link} onClick={changeForm}>
          {text}
        </div>
      ) : null}
    </Form>
  );
};

export default AuthForm;
