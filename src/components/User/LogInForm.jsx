import React, {useState} from 'react';
import styles from './User.module.css';
import { useDispatch } from 'react-redux';
import { toggleFormType, toggleForm, setUser } from '../../features/user-slice';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { validateInput } from '../../utils/common';

const LogInForm = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: "",
    password: "",
  })
  const [validValues, setValidValues] = useState({
    email: true,
    password: true,
  })

  const handleInputChange = ({target: {value, name}}) => {
    setValues({...values, [name]: value})
  }
  const handleLogin = (e) => {
    e.preventDefault();
    const auth = getAuth();
    const res = signInWithEmailAndPassword(auth, values.email, values.password);
      res.then((userCredential) => {
        const user = userCredential.user;
        const displayName = auth.currentUser.displayName;
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
          password: values.password,
          displayName: displayName,
        }));
        dispatch(toggleForm(false));
      })
      .catch(() => alert('Такого пользователя не существует'));
  }

  const handleBlur = ({value, name}) => {
    setValidValues({...validValues, [name]: validateInput(value, name)})
  }

  return (
      <form className={styles.form} onSubmit={handleLogin}>
                <div className={styles.group}>
                  <input
                    type="email"
                    placeholder="Введите email"
                    name="email"
                    autoComplete="off"
                    required
                    onChange={handleInputChange}
                    className={`${styles.input} ${validValues.email ? '' : `${styles.invalid}`}`}
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
                <div className={styles.link} onClick={() => dispatch(toggleFormType('signup'))}>У меня нет аккаунта</div>
                <button className="button" type="submit">Войти</button>
      </form>

  )
}

export default LogInForm