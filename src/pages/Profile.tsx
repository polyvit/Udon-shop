import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ROUTES } from "../utils/routes";
import useAuth from "../components/User/use-auth";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import TRASH from "../assets/trash.svg";
import EXIT from "../assets/exit.svg";
import { getAuth, signOut, deleteUser, User } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../features/authorization/user-slice";

const Profile = () => {
  const { isAuth, email, displayName } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate(ROUTES.HOME);
    }
  }, []);

  const logOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(
          setUser({
            email: null,
            id: null,
            token: null,
            password: null,
            displayName: null,
          })
        );
        navigate(ROUTES.HOME);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteAccount = () => {
    let shouldDelete = window.confirm("Удаляем аккаунт?");
    if (shouldDelete) {
      const auth = getAuth();
      const user = auth.currentUser as User;
      deleteUser(user)
        .then(() => {
          dispatch(
            setUser({
              email: null,
              id: null,
              token: null,
              password: null,
              displayName: null,
            })
          );
          navigate(ROUTES.HOME);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    isAuth && (
      <>
        <h3 className="big-title">Привет, {displayName}</h3>
        <div className="profile-info">
          <span className="base-title">{email}</span>
          <button className="link" onClick={logOut}>
            <img src={EXIT} alt="icon" className="link_icon" />
            Выйти из аккаунта
          </button>
        </div>
        <div className="profile-main">
          <Nav />
          <Outlet />
        </div>
        <div className="profile-footer">
          <button className="link" onClick={deleteAccount}>
            <img src={TRASH} alt="icon" className="link_icon" />
            Удалить аккаунт
          </button>
        </div>
      </>
    )
  );
};

export default Profile;
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}
