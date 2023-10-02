import React from 'react';
import {Link} from 'react-router-dom';

import styles from './Sidebar.module.css';
import LOGO from '../../assets/logo.svg';
import TG from '../../assets/tg.svg';
import VK from '../../assets/vk.svg';
import YOUTUBE from '../../assets/youtube.svg';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
        <Link to={'/'}>
          <img src={LOGO} alt="Logo" class={styles.logo}/>
        </Link>
        <div className={styles.icons}>
          <img src={TG} alt="Telegram" />
          <img src={VK} alt="Vkontakte" />
          <img src={YOUTUBE} alt="Youtube" />
        </div>
      </div>
  )
}

export default Sidebar