import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <Link to="/home">Home</Link>
        <Link to="/countries">Countries</Link>
        <Link to="/about">About</Link>
        <Link to="/">Feedback</Link>
      </ul>
    </div>
  );
};

export default Navbar;
