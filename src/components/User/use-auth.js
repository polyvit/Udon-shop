import { useSelector } from "react-redux";

const useAuth = () => {
  const {
    user: { email, token, id, displayName },
  } = useSelector((state) => state.user);
  return {
    isAuth: !!email,
    email,
    token,
    id,
    displayName,
  };
};

export default useAuth;
