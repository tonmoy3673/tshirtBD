import { useLoaderData } from "react-router-dom";

const Home = () => {
  const tshirts = useLoaderData();
  console.log(tshirts);
  return <div></div>;
};

export default Home;
