import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { ToastContainer } from "react-toastify";

const Main = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Navbar />
      <Outlet />
      <div
        className={navigation.state === "loading" ? <p>Loading ...</p> : null}
      ></div>
      <ToastContainer />
    </div>
  );
};

export default Main;
