import { Link } from "react-router-dom";
import { useCart } from "../context/AddToCart";
import { X } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import { useEffect } from "react";

const AddToCartProduct = () => {

    useEffect(()=>{
        document.title="Eco merce -- Your Carts"
    },[])
  const { cart, dltToCartFun } = useCart();
  return (
    <>
      <Navbar />
      <section className="relative container mx-auto max-w-6xl mt-20">
        <Link className="text-right flex justify-end" to={"/"}>
          ← Back to home
        </Link>
        <div className="">

          {cart.length===0 && <h1 className="text-5xl font-bold min-h-80 flex items-center justify-center text-gray-600 ">No products in your cart yet
</h1>}
          {cart.map((item, index) => {
            return (
              <div
                className="flex flex-col items-center md:items-start md:flex-row gap-5 bg-neutral-600 p-6 rounded-xl my-4 relative"
                key={index}
              >
                <div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-60 max-h-60"
                  />
                </div>
                <div className="py-3 md:py-10 space-y-4">
                  <h3 className="text-4xl font-semibold">{item.name}</h3>
                  <h1 className="text-5xl font-bold text-green-600">
                    {item.price} {item.currency}
                  </h1>
                  <p>{item.qty}</p>
                </div>
                <button
                  className="absolute top-3 right-5 cursor-pointer"
                  onClick={() => dltToCartFun(item)}
                >
                  <X size={26} />
                </button>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AddToCartProduct;
