import PropTypes from "prop-types";
const Cart = ({ cart, deleteCart }) => {
  console.log(cart);
  return (
    <div className="py-6">
      {cart.map((ps) => (
        <p key={ps._id} className="py-1">
          {ps.name}{" "}
          <span className="ms-4">
            <button
              onClick={() => deleteCart(ps._id)}
              className="hover:text-red-600 text-lg"
            >
              X
            </button>
          </span>
        </p>
      ))}
    </div>
  );
};
Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      // Add more properties as needed
    })
  ).isRequired,
  deleteCart: PropTypes.func.isRequired,
};

export default Cart;
