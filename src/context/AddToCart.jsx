import { createContext, useContext, useEffect, useState } from "react";

const AddToCartContext = createContext(null);

// Custom hook
export const useCart = () => useContext(AddToCartContext);

const AddToCartProvider = ({ children }) => {
  
  const [cart, setCart] = useState(()=>{
    
    try{
      const store=localStorage.getItem("cart")
    return store? JSON.parse(store):[]
    }catch(error){
      console.log(error)
    }
  });

  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cart))
  },[cart])
  const addToCartFun = (product) => {
    if (!product) {
      console.warn("No product passed to addToCartFun!");
      return;
    }
    if (cart.find((item) => item.id === product.id)) {
      return setCart((prev) =>
        prev.map((item) => item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        ),
      );
    } else {
      setCart((prev) => [...prev, { ...product, qty: 1 }]);
    }
  };

  const dltToCartFun = (product) => {
    if (!product) return;
     if (cart.find((item) => item.id === product.id && item.qty>1 )  ) {
      return setCart((prev) =>
        prev.map((item) => item.id === product.id ? { ...item, qty: item.qty - 1 } : item
        ),
      );
    } else {
      // setCart((prev) => [...prev, { ...product, qty: 1 }]);
      const filtered = cart.filter((item) => item !== product);
      setCart(filtered);
    }
  };

  return (
    <AddToCartContext.Provider
      value={{ cart, setCart, addToCartFun, dltToCartFun }}
    >
      {children}
    </AddToCartContext.Provider>
  );
};

export default AddToCartProvider;
