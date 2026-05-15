import { useCart } from "@/hook/useCart";
import { Check } from "lucide-react";

const OrderSummary = () => {
      const { subtotal, tax, shipping, total } = useCart();
    
  return (
    <div className="w-[380px] border rounded-2xl p-6 space-y-6">

      <h2 className="font-semibold">
        Order Summary
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between text-gray-600">
          <span className="text-gray-400 text-sm">Subtotal</span>
          <span className="text-sm font-semibold">${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span className="text-gray-400 text-sm">Shipping</span>
          <span className="text-sm font-semibold">
            {shipping === 0 ? "FREE" : `$${shipping}`}
          </span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span className="text-gray-400 text-sm">Tax</span>
          <span className="text-sm font-semibold">${tax.toFixed(2)}</span>
        </div>

      </div>

      <hr />

      <div className="flex justify-between text-xl font-semibold">
        <span className="text-sm font-semibold">Total</span>
        <span className="text-lg font-bold">${total.toFixed(2)}</span>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex text-gray-400 items-center gap-1">
        <Check className="w-4 h-4" />
        <span className="text-sm">Secure checkout</span>
        </div>

        <div className="flex text-gray-400 items-center gap-1">
        <Check className="w-4 h-4" />
        <span className="text-sm">Free returns within 30 days</span>
        </div>

        <div className="flex text-gray-400 items-center gap-1">
        <Check className="w-4 h-4" />
        <span className="text-sm">1-year warranty included</span>
        </div>
      </div>

    </div>
  )
}

export default OrderSummary