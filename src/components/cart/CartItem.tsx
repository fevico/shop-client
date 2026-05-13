import { useCart } from "@/hook/useCart";
import { Card } from "../ui/card";
import { Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "@/store/slice/cartSlice";

const CartItem = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center gap-4 py-20">
        <p className="text-gray-500">Your cart is empty</p>

        <button
          onClick={() => navigate("/shop")}
          className="px-4 py-2 bg-black text-white rounded-lg"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  const handleRemoveFromCart =  (productId: string) => {
    dispatch(removeFromCart(productId))
  }

  const handleCartIncrease = (productId: string) => {
    dispatch(increaseQuantity(productId))
  }

  const handleCartDecrease =  (productId: string) => {
    dispatch(decreaseQuantity(productId))
  }

  return (
    <div className="space-y-4">
      {cartItems.map((item) => (
        <Card
          key={item.productId}
          className="w-full p-4 rounded-2xl"
        >
          <div className="flex items-center justify-between">

            {/* LEFT */}
            <div className="flex items-center gap-4">

              {/* IMAGE */}
              <div className="w-24 h-24 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* DETAILS */}
              <div className="space-y-1">
                <h3 className="font-semibold text-lg">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500">
                  Electronics
                </p>

                <p className="font-semibold text-lg">
                  ${item.price.toFixed(2)}
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col items-end justify-between gap-6">

              {/* TRASH */}
              <button onClick={() => handleRemoveFromCart(item.productId)} className="text-gray-500 hover:text-red-500 transition">
                <Trash className="w-5 h-5" />
              </button>

              {/* QUANTITY */}
              <div className="flex items-center border rounded-xl overflow-hidden">

                <button onClick={() => handleCartDecrease(item.productId)} className="px-4 py-2 hover:bg-gray-100">
                  -
                </button>

                <span className="px-4 font-medium">
                  {item.quantity}
                </span>

                <button onClick={() => handleCartIncrease(item.productId)} className="px-4 py-2 hover:bg-gray-100">
                  +
                </button>

              </div>
            </div>

          </div>
        </Card>
      ))}
    </div>
  );
};

export default CartItem;