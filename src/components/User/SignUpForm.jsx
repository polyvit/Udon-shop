import React, {useState} from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import styles from './User.module.css';
import { useDispatch } from 'react-redux';
import { setUser, toggleFormType, toggleForm } from '../../features/user-slice';
import { validateInput } from '../../utils/common';

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


  const handleInputChange = ({target: {value, name}}) => {
    setValues({...values, [name]: value})
  }

  const handleSignup = (e) => {
    e.preventDefault();
    const auth = getAuth();
    const res = createUserWithEmailAndPassword(auth, values.email, values.password);
      res.then((userCredential) => {
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: `${values.name.toUpperCase()[0]}${values.surname.toUpperCase()[0]}`
        });
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
          password: values.password,
          displayName: `${values.name.toUpperCase()[0]}${values.surname.toUpperCase()[0]}`,
        }));
        dispatch(toggleForm(false));
      })
      .catch((error) => {
        console.log(error)
    });
  }

  const handleBlur = ({value, name}) => {
    setValidValues({...validValues, [name]: validateInput(value, name)})
  }

  return (
      <form className={styles.form} onSubmit={handleSignup}>
          <div className={styles.group}>
                  <input
                    type="text"
                    placeholder="Введите имя"
                    name="name"
                    autoComplete="off"
                    required
                    className={`${styles.input} ${validValues.name ? '' : `${styles.invalid}`}`}
                    onChange={handleInputChange}
                    onBlur={(e) => handleBlur(e.target)}
                  />
                </div>
                <div className={styles.group}>
                  <input
                    type="text"
                    placeholder="Введите фамилию"
                    name="surname"
                    autoComplete="off"
                    required
                    className={`${styles.input} ${validValues.surname ? '' : `${styles.invalid}`}`}
                    onChange={handleInputChange}
                    onBlur={(e) => handleBlur(e.target)}
                  />
                </div>
                <div className={styles.group}>
                  <input
                    type="email"
                    placeholder="Введите email"
                    name="email"
                    autoComplete="off"
                    required
                    className={`${styles.input} ${validValues.email ? '' : `${styles.invalid}`}`}
                    onChange={handleInputChange}
                    onBlur={(e) => handleBlur(e.target)}
                  />
                </div>
                <div className={styles.group}>
                  <input
                    type="password"
                    placeholder="Введите пароль"
                    name="password"
                    autoComplete="off"
                    required
                    className={`${styles.input} ${validValues.password ? '' : `${styles.invalid}`}`}
                    onChange={handleInputChange}
                    onBlur={(e) => handleBlur(e.target)}
                  />
                </div>
                <div className={styles.link} onClick={() => dispatch(toggleFormType('login'))}>У меня уже есть аккаунт</div>
                <button type="submit" className="button">Зарегистрироваться</button>
      </form>

  )
}

export default SignUpForm