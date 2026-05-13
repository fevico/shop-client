import CartItem from "@/components/cart/CartItem"
import CartSummary from "@/components/cart/CartSummary"

const Cart = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      {/* TITLE */}
      <h3 className="text-3xl font-semibold mb-8">
        Shopping Cart
      </h3>

      {/* MAIN LAYOUT */}
      <div className="flex gap-8 items-start">

        {/* LEFT SIDE */}
        <div className="flex-1">
          <CartItem />
        </div>

        {/* RIGHT SIDE */}
        <CartSummary/>

      </div>
    </div>
  )
}

export default Cart