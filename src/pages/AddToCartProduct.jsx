import { Link } from "react-router-dom";
import { useCart } from "../context/AddToCart";
import { X } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Quantity from "./../components/Quantity";
import { motion, AnimatePresence } from "framer-motion";

const AddToCartProduct = () => {
  useEffect(() => {
    document.title = "Eco merce -- Your Carts";
  }, []);
  const { cart, dltToCartFun, setCart } = useCart();
  const buyNow = () => {
    toast.info("Buy Now, Comming Soon!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <section className="relative container mx-auto max-w-6xl mt-20">
        <Link
          className="text-right flex justify-end transition-colors duration-150 hover:text-blue-600"
          to={"/"}
        >
          ← Back to home
        </Link>
        <div className="">
          <AnimatePresence>
            {cart.length === 0 && (
              <h1 className="text-2xl text-center md:text-5xl font-bold min-h-80 flex items-center justify-center text-gray-600  ">
                No products in your cart yet
              </h1>
            )}
            {cart.map((item) => {
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -50, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col items-center md:items-start md:flex-row gap-5 bg-neutral-600 p-6 rounded-xl my-4 relative"
                  // key={index}
                >
                  <div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-60 max-h-60"
                    />
                  </div>
                  <div className="py-3 md:py-5 space-y-4">
                    <h3 className="text-4xl font-semibold">{item.name}</h3>
                    <h1 className="text-5xl font-bold text-green-600">
                      {item.price} {item.currency}
                    </h1>

                    <p>{item.description}</p>
                    <div className="flex   gap-10">
                      {item.stock > 0 ? (
                        <div className=" w-50 h-12 border border-green-700 rounded-full  overflow-hidden flex justify-between items-center">
                          <div className="bg-green-700 w-1/2 flex items-center justify-center h-full font-bold  ">
                            In Stock
                          </div>
                          <p className=" w-1/2 flex items-center justify-center h-full font-bold">
                            Stock: {item.stock}
                          </p>
                        </div>
                      ) : (
                        <div className=" w-50 h-12  rounded-full  overflow-hidden flex justify-between items-cente">
                          <div className="bg-red-700 w-full flex items-center justify-center h-full font-bold  ">
                            Out of Stock
                          </div>
                        </div>
                      )}
                      <Quantity
                        cartPage
                        setCart={setCart}
                        item={item}
                        qty={item.qty}
                      />
                    </div>
                  </div>
                  <button
                    className="absolute top-3 right-5 cursor-pointer"
                    onClick={() => dltToCartFun(item)}
                  >
                    <X size={26} />
                  </button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
        <div className="flex items-center justify-between mt-10 ">
          <h1 className="text-xl font-bold">
            Total:{" "}
            {cart.reduce(
              (acc, val) =>
                val.discountPrice
                  ? (acc + val.qty * val.discountPrice)
                  : (acc + val.qty * val.price),
              0,
            ).toFixed(3)}{" "}
            USD
          </h1>
          <button
            className="text-xl bg-orange-800 px-3 cursor-pointer font-semibold py-2 rounded-md"
            onClick={buyNow}
          >
            Buy Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AddToCartProduct;
