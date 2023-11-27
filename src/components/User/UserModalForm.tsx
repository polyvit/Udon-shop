import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {toggleForm} from '../../features/authorization/user-slice';
import styles from './User.module.css';
import LogInForm from './LogInForm';
import SignUpForm from './SignUpForm'; 
import { RootState } from '../../features/store';
import Form from '../../UI/Form/Form';
import AuthForm from './AuthForm';

const UserModalForm = () => {
  const dispatch = useDispatch();
  const {showForm, formType} = useSelector((state: RootState) => state.user);

  const clickHandler = () => {
    dispatch(toggleForm(false))
  }

  return showForm ? (
      <Form clickHandler={clickHandler}>
        {/* {formType === 'login' ? <LogInForm /> : <SignUpForm />} */}
        {formType === 'login' 
          ? <AuthForm type="login" text="У меня нет аккаунта" buttonProps={{text: "Войти"}}/>
          : <AuthForm type="signup" text="У меня уже есть аккаунт" buttonProps={{text: "Зарегистрироваться"}}/>
        }
      </Form>
  ) : null
}

export default UserModalForm