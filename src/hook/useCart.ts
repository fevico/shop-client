import type { AppRootState } from "@/store/store";
import { useSelector } from "react-redux";

export const useCart = () => {
  const cartItems = useSelector(
    (state: AppRootState) => state.cart.items
  );

  // subtotal
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // tax
  const tax = subtotal * 0.08;

  // shipping
  const shipping = subtotal > 50 ? 0 : 10;
  
  // total
  const total = subtotal + tax + shipping;

  // cart quantity
  const cartQuantity = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return {
    cartItems,
    subtotal,
    tax,
    shipping,
    total,
    cartQuantity,
  };  
};