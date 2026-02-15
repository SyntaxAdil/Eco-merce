import React from "react";

const Price = ({ discountPrice, currency, price,productPage=false }) => {
  return (
    <div>
      {discountPrice  ? (
        <div className={`flex gap-1 ${productPage ? "items-start flex-col " : "items-center "}  `}>
          <p className={`${productPage && "font-bold text-4xl text-green-600 "}`}>
            {discountPrice} {currency}
          </p>
          <del className={`text-sm ${productPage && "mb-5 mt-2"}`} >
            {price}
            {currency}
          </del>
        </div>
      ) : (
        <p className={`${productPage && "font-bold text-4xl text-green-600 mb-5 "}`}>
          {price }
          {currency}
        </p>
      )}
    </div>
  );
};

export default Price;
