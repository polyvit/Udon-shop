import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  loadOrders,
  selectOrders,
} from "../../../features/orders/orders-slice";
import Order from "./Order";
import useAuth from "../../User/use-auth";
import { RootState, useAppDispatch } from "../../../features/store";

const Orders = () => {
  const dispatch = useAppDispatch();
  const { email } = useAuth();
  const status = useSelector((state: RootState) => state.orders.status);
  const data = useSelector((state: RootState) => selectOrders(state.orders.orders, email));

  useEffect(() => {
    dispatch(loadOrders(null));
  }, []);
 
  return (
    <div>
      {status === "loading" && <h4>Идет загрузка</h4>}
      {status === "success" &&
        !!data.length &&
        data.map((item) => <Order {...item} />)}
      {status === "success" && !data.length && <h4>Пока нет заказов</h4>}
    </div>
  );
};

export default Orders;
