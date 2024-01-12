import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Form from "../../UI/Form/ModalWrapper";
import InputField from "../../UI/Input/InputField";
import styles from "../../UI/Form/Form.module.css";
import {
  toggleForm,
  clearCart,
  setOrder,
} from "../../features/cart/cart-slice";
import { validateInput } from "../../utils/common";
import { toast } from "react-toastify";
import { ROUTES } from "../../utils/routes";
import { RootState, useAppDispatch } from "../../features/store";

const OrderForm = () => {
  const dispatch = useDispatch();
  const appDispatch = useAppDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState({ email: "" });
  const [validValue, setValidValue] = useState({ email: true });
  const { showForm, items, totalPrice } = useSelector(
    (state: RootState) => state.cart
  );

  const notify = () => toast("Ваши данные успешно отправлены");

  const clickHandler = () => {
    dispatch(toggleForm());
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setValue({ email: event.target.value });
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setValidValue({
      email: validateInput(event.target.value, event.target.name),
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validValue.email) return;
    const order = {
      email: value.email,
      date: new Date(),
      items,
      totalPrice,
    };
    appDispatch(setOrder(order));
    dispatch(clearCart());
    dispatch(toggleForm());
    navigate(ROUTES.HOME);
    notify();
  };

  return showForm ? (
    <Form clickHandler={clickHandler}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <InputField
          type="email"
          label="email"
          name="email"
          onChange={handleInputChange}
          validValues={validValue}
          onBlur={handleBlur}
        />
        <button type="submit" className="button">
          Отправить
        </button>
      </form>
    </Form>
  ) : null;
};

export default OrderForm;
