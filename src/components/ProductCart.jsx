import { Link } from "react-router-dom";
import AddToCartBtn from "./AddToCartBtn";
import Price from "./Price";
import { useCart } from "../context/AddToCart";

const ProductCart = ({
  item,
  id,
  image,
  name,
  brand,
  discountPrice,
  currency,
  price,
  category,
}) => {
  const { cart } = useCart();
  const isAdded = cart.find(product=>product.id===item.id)?.added||false

  return (
    <div className="relative w-fit mx-auto  group">
      <Link to={`/product/${id}`}>
        <div className=" w-60  rounded overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-fit transition-all duration-200 max-h-60 group-hover:scale-120 cursor-zoom-in "
          />
        </div>
        <div className="py-2 space-y-1.5">
          <h1 className="font-semibold">{name}</h1>
          <div className="flex items-center justify-between">
            <p className="font-medium">{brand}</p>
            <Price
              currency={currency}
              discountPrice={discountPrice}
              price={price}
            />
          </div>
        </div>
      </Link>
      {/* <AddToCartBtn clasess="w-full" item={item} content="Add to cart" /> */}

      <AddToCartBtn
        clasess="w-full"
        item={item}
        content={isAdded ? "Added to cart" : "Add to cart"}
        isDisable={isAdded ? true : false}
      />

      <span className="absolute top-1 right-2 bg-[#242424] px-2 py-1 text-sm font-semibold rounded-full  ">
        {category}
      </span>
    </div>
  );
};

export default ProductCart;
