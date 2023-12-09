const Products = (tshirt) => {
  console.log(tshirt.tshirt);
  const { name, picture, price } = tshirt.tshirt;
  return (
    <div>
      <img src={picture} alt="photo" className="w-52 rounded-md h-56 mx-auto" />
      <h2 className="text-center py-2 text-lg text-blue-500 font-semibold">
        {name}
      </h2>
      <h2 className="text-center ">
        Price : <span className="text-red-500">{price}$</span>
      </h2>
      <div className="py-3 text-center">
        <button className="bg-blue-500 py-2 px-3 hover:bg-orange-500 rounded-lg">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Products;
