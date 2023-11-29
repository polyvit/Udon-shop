import React, { useEffect } from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import { ROUTES } from '../utils/routes';
import useAuth from '../components/User/use-auth';
import { useNavigate } from 'react-router-dom';
import Nav from '../components/Nav/Nav';

const Profile = () => {
  const {isAuth, email, displayName} = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate(ROUTES.HOME)
    }
  }, [])

  return isAuth && (
    <>
      <h3 className='big-title'>Привет, {displayName}</h3>
      <div className='profile-info'>
        <span className='base-title'>{email}</span>
        <button className="link">Выйти из аккаунта</button>
      </div>
      <div className='profile-main'>
        <Nav/>
        <Outlet/>
      </div>
      {/* <Link to={ROUTES.HOME} className="button">Вернуться на главную</Link> */}
    </>
  )
}

export default Profile