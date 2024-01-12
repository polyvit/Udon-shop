import { useDispatch, useSelector } from "react-redux";
import { toggleForm } from "../../features/authorization/user-slice";
import { RootState } from "../../features/store";
import ModalWrapper from "../../UI/Form/ModalWrapper";
import AuthForm from "./AuthForm";

const UserModalForm = () => {
  const dispatch = useDispatch();
  const { showForm, formType } = useSelector((state: RootState) => state.user);

  const clickHandler = () => {
    dispatch(toggleForm(false));
  };

  return showForm ? (
    <ModalWrapper clickHandler={clickHandler}>
      {/* {formType === 'login' ? <LogInForm /> : <SignUpForm />} */}
      {formType === "login" ? (
        <AuthForm type="login" text="У меня нет аккаунта" buttonText="Войти" />
      ) : (
        <AuthForm
          type="signup"
          text="У меня уже есть аккаунт"
          buttonText="Зарегистрироваться"
        />
      )}
    </ModalWrapper>
  ) : null;
};

export default UserModalForm;
