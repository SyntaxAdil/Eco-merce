import React from "react";
import { useCart } from "../context/AddToCart";

const AddToCartBtn = ({ clasess = "", item }) => {
  const { addToCartFun } = useCart();

  return (
    <button
      type="button"
      className={`bg-black text-white px-6 py-3 rounded-xl cursor-pointer duration-200 transition-all hover:bg-gray-900  ${clasess}`}
      onClick={() => addToCartFun(item)}
    >
      Add To Cart
    </button>
  );
};

export default AddToCartBtn;
