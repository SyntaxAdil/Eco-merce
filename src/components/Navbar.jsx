import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";


const Navbar = () => {
  return (
    <nav className="container mx-auto max-w-6xl flex items-center justify-between my-4 px-6 py-2  rounded-full fixed top-0 left-0 right-0  z-50 backdrop-blur-2xl border border-white/10 shadow ">
      <div>
        <Link to={"/"}>
          <h2 className="text-xl font-bold uppercase">
            {" "}
             Eco <span className="text-blue-700">Merce</span>
          </h2>
        </Link>
      </div>

      <ul>
        <li className="font-bold transition-all duration-200 hover:underline">
          <Link to={"/"}>Products</Link>
        </li>
      </ul>
      <button className="cursor-pointer">
        <Link to={"/carts"}>  
        <ShoppingCart />
        </Link>
      </button>
    </nav>
  );
};

export default Navbar;
