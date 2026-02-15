import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import AddToCartBtn from "./../components/AddToCartBtn";
import Navbar from "../components/Navbar";
import Footer from './../sections/Footer';
import Price from "../components/Price";
const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  // useEffect(()=>{
  //       document.title=`Eco merce -- ${product.name}`
  //   },[product])
  useEffect(() => {
  if (product?.name) {
    document.title = `Ecommerce -- ${product.name}`;
  }
}, [product]);

  useEffect(() => {

    const fetchData = async () => {
      const res = await fetch("/product.json");
      const data = await res.json();

      const found = data.products.find((item) => item.id === Number(id));

      setProduct(found);
    };

    fetchData();
  }, [id]);

  if (!product) return <h2 className="text-center mt-10">Loading...</h2>;

  return (
    <>
      <Navbar />
    <section className="container mx-auto max-w-6xl mt-20 px-6">
        <div className="grid md:grid-cols-2 gap-12  p-10 rounded-2xl ">
          
          {/* Product Image */}
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="rounded-xl w-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div>
            <p className="text-sm text-gray-500 mb-2">
              Category: {product.category}
            </p>

            <h1 className="text-3xl font-bold mb-2">
              {product.name}
            </h1>

            <p className="text-gray-300 mb-4">
              Brand: {product.brand}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-yellow-500 font-semibold">
                ⭐ {product.rating}
              </span>
              <span className="text-gray-500">
                ({product.reviews} reviews)
              </span>
            </div>

            {/* Price Section */}
            <div className="mb-6">
              <span className="text-2xl font-bold text-green-600">
                {product.currency} {product.discountPrice}
              </span>
              <span className="ml-3 line-through text-gray-400">
                {product.currency} {product.price}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-300 mb-6">
              {product.description}
            </p>

            {/* Extra Info */}
            <div className="text-sm text-gray-300 space-y-1 mb-6">
              <p><strong>SKU:</strong> {product.sku}</p>
              <p><strong>Stock:</strong> {product.stock} available</p>
              <p><strong>Added On:</strong> {product.createdAt}</p>
            </div>

            {/* Button */}
            <AddToCartBtn item={product} />
          </div>
        </div>
      </section>


      <Footer></Footer>
    </>
  );
};

export default ProductDetails;
