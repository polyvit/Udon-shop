import { useEffect } from "react";
import Header from "./components/Header/Header";
import RoutesMap from "./components/Routes/RoutesMap";
import Sidebar from "./components/Sidebar/Sidebar";
import UserModalForm from "./components/User/UserModalForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OrderForm from "./components/Cart/OrderForm";


function App() {
  const notify = () =>
    toast("Зарегистрируйтесь и получите скидку 10% на всё меню");

  useEffect(() => {
    const id = setTimeout(() => notify(), 5000);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className="container">
      <Sidebar />
      <UserModalForm />
      <OrderForm/>
      <div className="main">
        <div className="main-container">
          <Header />
          <RoutesMap />
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="dark"
      />
    </div>
  );
}

export default App;
