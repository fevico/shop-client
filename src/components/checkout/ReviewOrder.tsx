import { useCart } from "@/hook/useCart"
import { Card } from "../ui/card"
import { Button } from "../ui/button"

const ReviewOrder = ({checkoutData}: any) => {
    const {cartItems} = useCart()
  return (
    <div>
        <Card className="p-6 rounded-2xl space-y-6">
            <h2 className="text-xl font-bold">Review Order</h2>
            <div className="space-y-2"> 
            <p className="font-semibold">Shipping Address</p>
            <div className="space-y-2 bg-gray-100 p-5 rounded-xl">
                <p className="font-semibold">{checkoutData.fullName}</p>
                <p className="text-gray-600">{checkoutData.email}</p>
                <p className="text-gray-600">{checkoutData.address}</p>
            </div>
            </div>
            {/* order item */}
            <div className="space-y-2">
                <p className="font-semibold">Order Items</p>
                <div className="space-y-5 p-4 rounded-lg">
                    {/* Render order items here */}
                    {cartItems.map((item: any, index: number) => (
                      <div key={index} className="flex justify-between items-start">
                        <div className="flex gap-4">
                            <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded-xl" />
                            <div className="flex flex-col">
                                <p className="font-semibold text-base">{item.name}</p>
                                <p className="text-gray-500 text-sm">Quantity: {item.quantity}</p>
                            </div>
                        </div>
                        <p>${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    ))}
                </div>
            </div>
            <Button className="py-4" size="lg">Place order</Button>
        </Card>
    </div>
  )
}

export default ReviewOrder