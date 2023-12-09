const Products = (tshirt) => {
  console.log(tshirt.tshirt);
  const { name, picture, price, _id } = tshirt.tshirt;
  return (
    <div>
      <img src={picture} alt="photo" />
      <h2>{name}</h2>
      <h2>{price}</h2>
    </div>
  );
};

export default Products;
