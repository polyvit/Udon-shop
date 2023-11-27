import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser, toggleForm } from "../../features/authorization/user-slice";

const useForm = (type) => {
  const dispatch = useDispatch();
  switch (type) {
    case "login": {
      return (values) => {
        const auth = getAuth();
        const res = signInWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        res
          .then((userCredential) => {
            const user = userCredential.user;
            const displayName = auth.currentUser?.displayName;
            dispatch(
              setUser({
                email: user.email,
                id: user.uid,
                token: user.refreshToken,
                password: values.password,
                displayName: displayName,
              })
            );
            dispatch(toggleForm(false));
          })
          .catch(() => alert("Такого пользователя не существует"));
      };
    }
    case "signup": {
      return (values) => {
        const auth = getAuth();
        const res = createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        res
          .then((userCredential) => {
            const user = userCredential.user;
            if (auth.currentUser) {
              updateProfile(auth.currentUser, {
                displayName: `${values.name.toUpperCase()[0]}${
                  values.surname.toUpperCase()[0]
                }`,
              });
            }
            dispatch(
              setUser({
                email: user.email,
                id: user.uid,
                token: user.refreshToken,
                password: values.password,
                displayName: `${values.name.toUpperCase()[0]}${
                  values.surname.toUpperCase()[0]
                }`,
              })
            );
            dispatch(toggleForm(false));
          })
          .catch((error) => {
            console.log(error);
          });
      };
    }
    default: {
      return () => {};
    }
  }
};

export default useForm;
