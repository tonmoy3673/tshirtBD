import { useLoaderData } from "react-router-dom";
import Products from "./Products";
import Cart from "../Cart/Cart";
import { useState } from "react";

import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  const notify = () => toast("Wow so easy !");

  return (
    <div>
      <button onClick={notify}>Notify !</button>
      <ToastContainer />
    </div>
  );
}
const Home = () => {
  const tshirts = useLoaderData();

  const [cart, setCart] = useState([]);

  const addToCart = (tshirt) => {
    const exists = cart?.find((ts) => ts._id === tshirt._id);
    if (exists) {
      toast("You already added this product!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      const newCart = [...cart, tshirt];
      setCart(newCart);
    }
  };

  return (
    <div>
      <h1 className="text-center text-sky-700 font-semibold py-4 text-2xl">
        Total T-shirts : <span>{tshirts?.length} pics</span>
      </h1>
      <div className="flex justify-center">
        <div className="py-10 grid md:grid-cols-3 grid-cols-1 gap-10 px-16 w-8/12">
          {tshirts?.map((tshirt) => (
            <Products key={tshirt._id} tshirt={tshirt} addToCart={addToCart} />
          ))}
        </div>
        <div className="relative w-4/12 text-center">
          <div className=" py-10 sticky top-0">
            <h2 className="text-xl text-sky-800 font-semibold">
              Order Details
            </h2>
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
