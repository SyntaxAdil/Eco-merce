import React from "react";
import { useCart } from "../context/AddToCart";

const AddToCartBtn = ({ clasess = "", item,content,isDisable }) => {
  const { addToCartFun } = useCart();

  return (
    <button
      type="button"
      className={`bg-black text-white px-6 py-3 rounded-xl cursor-pointer duration-200 transition-all hover:bg-gray-900 select-none  ${clasess} disabled:bg-gray-600 font-semibold`}
      onClick={() => addToCartFun(item)}
      disabled={isDisable}
    >
     {content}
    </button>
  );
};

export default AddToCartBtn;
