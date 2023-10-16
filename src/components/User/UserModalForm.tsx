import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {toggleForm} from '../../features/authorization/user-slice';
import styles from './User.module.css';
import LogInForm from './LogInForm';
import SignUpForm from './SignUpForm'; 
import { RootState } from '../../features/store';

const UserModalForm = () => {
  const dispatch = useDispatch();
  const {showForm, formType} = useSelector((state: RootState) => state.user);

  return showForm ? (
    <>
            <div className={styles.overlay} onClick={() => dispatch(toggleForm(false))}></div>
            <div className={styles.wrapper}>
              <div className={styles.close} onClick={() => dispatch(toggleForm(false))}>
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <polygon
                        points="375.808,143.28 364.304,132.16 256.176,244.144 148.032,132.16 136.544,143.28 245.056,255.664 136.544,368.032 148.032,379.152 256.176,267.168 364.304,379.152 375.808,368.032 267.296,255.664 "
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M0,0v512h512V0H0z M496.032,496.032H15.968V15.968h480.064V496.032z"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <h3 className={styles.title}>Введите данные</h3>
              {formType === 'login' ? <LogInForm /> : <SignUpForm />}
            </div>
          </>
  ) : <></>
}

export default UserModalForm