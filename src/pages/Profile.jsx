import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <>
      <h3 className='big-title mb-25'>Раздел в разработке</h3>
      <p className='mb-25'>В будущем здесь можно будет посмотреть историю заказов и поменять данные профиля</p>
      <Link to={"/"} className="button">Вернуться на главную</Link>
    </>
  )
}

export default Profile