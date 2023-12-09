import { useLoaderData } from "react-router-dom";

const Home = () => {
  const tshirts = useLoaderData();
  console.log(tshirts);
  return (
    <div>
      <h1>Total T-shirts= {tshirts.length}</h1>
    </div>
  );
};

export default Home;
