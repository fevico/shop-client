import { useCart } from "@/hook/useCart";
import { useNavigate } from "react-router-dom";

const CartSummary = () => {
  const { cartItems, subtotal, tax, shipping, total } = useCart();
    const navigate = useNavigate();
  if (cartItems.length === 0) return null;

  const handleCheckout = () => {
    navigate('/checkout')
  }

  return (
    <div className="w-87.5 border rounded-2xl p-6 space-y-6">

      <h2 className="text-2xl font-semibold">
        Order Summary
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span>
            {shipping === 0 ? "FREE" : `$${shipping}`}
          </span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>

      </div>

      <hr />

      <div className="flex justify-between text-xl font-semibold">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <button onClick={handleCheckout} className="w-full bg-black text-white py-3 rounded-xl hover:bg-black/90">
        Proceed to Checkout
      </button>

    </div>
  );
};

export default CartSummary;