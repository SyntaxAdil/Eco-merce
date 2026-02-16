import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "./../context/AddToCart";

const Navbar = () => {
  const { cart } = useCart();
 
  return (
    <nav className="container mx-auto max-w-6xl flex items-center justify-between my-4 px-6 py-2  rounded-full fixed top-0 left-0 right-0  z-50 backdrop-blur-2xl border border-white/10 shadow-lgnpm ">
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
      <button className="cursor-pointer relative">
        <Link to={"/carts"}>
          <ShoppingCart />
        </Link>

         {cart.length > 0 && <span className="absolute  top-0 -right-2 w-3 h-3 p-2 rounded-full bg-red-400 flex items-center justify-center text-[10px]">
          {cart.reduce((acc,item)=>acc+=item.qty,0)}
          

        </span>} 

        
      </button>
    </nav>
  );
};

export default Navbar;
