import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="py-6">
      <ul className="flex items-center justify-center">
        <Link to="/home" className="me-4 text-blue-500 hover:text-orange-500">
          Home
        </Link>
        <Link
          to="/countries"
          className="me-4 text-blue-500 hover:text-orange-500"
        >
          Countries
        </Link>
        <Link to="/about" className="me-4 text-blue-500 hover:text-orange-500">
          About
        </Link>
        <Link
          to="/feedback"
          className="me-4 text-blue-500 hover:text-orange-500"
        >
          Feedback
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
