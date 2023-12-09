import { createContext } from "react";

const CartContext = createContext({
  cartItems: [],
  IncreaseCartItems: () => {},
  DecreaseCartItems: () => {},
});

export default CartContext;
