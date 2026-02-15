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
      <section className="relative container mx-auto max-w-6xl mt-20">
        <Link className="text-right flex justify-end" to={"/"}>
          ← Back to home
        </Link>
        <div className="max-w-5xl mx-auto p-10 grid md:grid-cols-2 gap-10 ">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-xl w-full max-h-full "
          />

          <div className="mt-10">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-4">{product.brand}</p>
            <Price currency={product.currency} price={product.price} discountPrice={product.discountPrice} productPage/>
            <p className="mb-6">{product.description}</p>
            <AddToCartBtn item={product} />
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
};

export default ProductDetails;
