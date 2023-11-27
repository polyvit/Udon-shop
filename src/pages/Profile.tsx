import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../utils/routes';
import useAuth from '../components/User/use-auth';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const {isAuth} = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate(ROUTES.HOME)
    }
  }, [])

  return isAuth && (
    <>
      <h3 className='big-title mb-25'>Раздел в разработке</h3>
      <p className='mb-25'>В будущем здесь можно будет посмотреть историю заказов и поменять данные профиля</p>
      <Link to={ROUTES.HOME} className="button">Вернуться на главную</Link>
    </>
  )
}

export default Profile