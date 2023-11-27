import React, {useState, Fragment} from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import styles from './User.module.css';
import { useDispatch } from 'react-redux';
import { setUser, toggleFormType, toggleForm } from '../../features/authorization/user-slice';
import { validateInput } from '../../utils/common';
import InputField from '../../UI/InputField';
import useForm from './use-form';

const AuthForm = ({type, text, buttonProps}) => {
  const dispatch = useDispatch();
  const submitFunc = useForm(type);
  
  const [values, setValues] = useState(() => {
    const initial = {email: "", password: ""}
    return type === 'signup' ? {...initial, name: "", surname: ""} : initial;
  })
  const [validValues, setValidValues] = useState(() => {
    const initial = {email: true, password: true}
    return type === 'signup' ? {...initial, name: true, surname: true} : initial;
  }) 

  const handleInputChange = (event) => {
    event.stopPropagation();
    setValues({...values, [event.target.name]: event.target.value})
  }

  const handleBlur = (event) => {
    event.stopPropagation();
    setValidValues({...validValues, [event.target.name]: validateInput(event.target.value, event.target.name)})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation()
    submitFunc(values);
  }

  const changeForm = (e) => {
    e.stopPropagation()
    if (type === 'login') {
      dispatch(toggleFormType('signup'))
    } else {
      dispatch(toggleFormType('login'))
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {type === 'signup' && (
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
              type="password"
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
            <div className={styles.link} onClick={changeForm}>{text}</div>
            <button type="submit" className="button">Зарегистрироваться</button>
      </form>
  )
}

export default AuthForm