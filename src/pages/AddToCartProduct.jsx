import { Link } from "react-router-dom";
import { useCart } from "../context/AddToCart";
import { X } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import { useEffect } from "react";
import { toast } from "react-toastify";

const AddToCartProduct = () => {
  useEffect(() => {
    document.title = "Eco merce -- Your Carts";
  }, []);
  const { cart, dltToCartFun } = useCart();
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
    <>
      <Navbar />
      <section className="relative container mx-auto max-w-6xl mt-20">
        <div className="flex items-center justify-between">
          <h1 className="text-xl">
            Total:{" "}
            {cart.reduce(
              (acc, val) => Math.round(acc + val.qty * val.discountPrice),
              0,
            )}{" "}
            USD
          </h1>
          <Link className="text-right flex justify-end" to={"/"}>
            ← Back to home
          </Link>
        </div>
        <div className="">
          {cart.length === 0 && (
            <h1 className="text-2xl text-center md:text-5xl font-bold min-h-80 flex items-center justify-center text-gray-600  ">
              No products in your cart yet
            </h1>
          )}
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

                  <p>{item.description}</p>
                  <div className="flex gap-5">
                    <p className="bg-[#242424] w-max px-10 py-2 rounded font-bold">
                      Quantity: {item.qty < 10 ? "0" + item.qty : item.qty}
                    </p>
                    <button
                      className="text-xl bg-orange-800 px-3 cursor-pointer font-semibold py-2 rounded-md"
                      onClick={buyNow}
                    >
                      Buy Now
                    </button>
                  </div>
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
