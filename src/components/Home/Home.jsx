import { useLoaderData } from "react-router-dom";
import Products from "./Products";

const Home = () => {
  const tshirts = useLoaderData();
  console.log(tshirts);

  return (
    <div>
      <h1 className="text-center text-sky-700 font-semibold py-4">
        Total T-shirts : <span>{tshirts.length} pics</span>
      </h1>
      <div className="flex">
        <div>
          {tshirts.map((tshirt) => (
            <Products key={tshirt._id} tshirt={tshirt} />
          ))}
        </div>
        <div>
          <h2>Order Details</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
