import ProductCart from "./../components/ProductCart";
import React, { useEffect, useState } from "react";

const ProductSection = () => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/product.json");
      const data = await res.json();
      setProductData(data.products);
    };
    fetchData();
  }, []);

  return (
    <section>
      <h1 className="text-center text-4xl mb-4 font-bold ">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  px-5 gap-10 py-5">
        {productData.map((product,index) => (
          <ProductCart
          item={product}
           id={product.id}  
            key={index}
            brand={product.brand}
            currency={product.currency}
            discountPrice={product.discountPrice}
            price={product.price}
            image={product.image}
            category={product.category}
            name={product.name}
          />
        ))}
      </div>
      
    </section>
  );
};

export default ProductSection;
