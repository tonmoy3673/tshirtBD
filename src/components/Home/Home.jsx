import { useLoaderData } from "react-router-dom";
import Products from "./Products";

const Home = () => {
  const tshirts = useLoaderData();
  console.log(tshirts);

  return (
    <div>
      <h1 className="text-center text-sky-700 font-semibold py-4 text-2xl">
        Total T-shirts : <span>{tshirts.length} pics</span>
      </h1>
      <div className="flex">
        <div className="py-10 grid md:grid-cols-3 grid-cols-1 gap-10 px-16 w-9/12">
          {tshirts.map((tshirt) => (
            <Products key={tshirt._id} tshirt={tshirt} />
          ))}
        </div>
        <div className="relative w-3/12 text-center">
          <div className=" py-10 sticky top-0">
            <h2 className="text-xl text-sky-800 font-semibold">
              Order Details
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
