import { Minus, Plus } from "lucide-react";

const Quantity = ({
  qty,
  setQty,
  cartPage = false,
  
  item,
  setCart,
}) => {
  const increaseQty = (product) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === product.id
                    
          ? { ...item, qty: item.qty + 1 }
          : item,
      ),
    );
  };
  const decreaseQty = (product) => {
    setCart((prev) =>
      
      prev.map((item) =>
        item.id === product.id
                    
          ? { ...item, qty: item.qty>1 ? item.qty - 1 : 1 }
          : item,
      ),
    );
  };
  return (
    <>
      {!cartPage ? (
        <div className="flex gap-5 px-4 py-3 bg-neutral-700 w-fit rounded-full font-bold mb-5">
          <Minus
            onClick={() => setQty((prev) => (prev > 1 ? prev - 1 : 1))}
            className="transition-all duration-200 hover:bg-white/10 rounded-full p-1 cursor-pointer"
            size={28}
          />
          <p className="select-none">{qty < 10 ? "0" + qty : qty}</p>
          <Plus
            onClick={() => setQty((prev) => prev + 1)}
            className="transition-all duration-200 hover:bg-white/10 rounded-full p-1 cursor-pointer"
            size={28}
          />
        </div>
      ) : (
        <div className="flex gap-5  bg-[#242424] w-max px-10 py-2 rounded font-bold  mb-5">
          <Minus
            onClick={() => decreaseQty(item)}
            className="transition-all duration-200 hover:bg-white/10 rounded-full p-1 cursor-pointer"
            size={28}
          />
          <p className="select-none">Quantity: {qty<10 ?"0"+qty:qty}</p>
          <Plus
            onClick={() => increaseQty(item)}
            className="transition-all duration-200 hover:bg-white/10 rounded-full p-1 cursor-pointer"
            size={28}
          />
        </div>
      )}
    </>
  );
};

export default Quantity;
