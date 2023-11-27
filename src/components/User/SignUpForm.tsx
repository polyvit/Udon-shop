import React, {useState} from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import styles from './User.module.css';
import { useDispatch } from 'react-redux';
import { setUser, toggleFormType, toggleForm } from '../../features/authorization/user-slice';
import { validateInput } from '../../utils/common';
import InputField from '../../UI/InputField';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  })
  const [validValues, setValidValues] = useState({
    name: true,
    surname: true,
    email: true,
    password: true,
  })


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({...values, [event.target.name]: event.target.value})
  }

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const auth = getAuth();
    const res = createUserWithEmailAndPassword(auth, values.email, values.password);
      res.then((userCredential) => {
        const user = userCredential.user;
        if (auth.currentUser) {
          updateProfile(auth.currentUser, {
          displayName: `${values.name.toUpperCase()[0]}${values.surname.toUpperCase()[0]}`
        });
        }
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
          password: values.password,
          displayName: `${values.name.toUpperCase()[0]}${values.surname.toUpperCase()[0]}`,
        }));
        dispatch(toggleForm(false));
      })
      .catch((error) => {
        console.log(error)
    });
  }

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setValidValues({...validValues, [event.target.name]: validateInput(event.target.value, event.target.name)})
  }

  return (
    <form className={styles.form} onSubmit={handleSignup}>
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
            <div className={styles.link} onClick={() => dispatch(toggleFormType('login'))}>У меня уже есть аккаунт</div>
            <button type="submit" className="button">Зарегистрироваться</button>
      </form>

  )
}

export default SignUpForm