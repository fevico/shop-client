import { Card } from "@/components/ui/card"
import OrderCard from "@/components/user-dashborad/OrderCard"
import { Box, ShoppingCart } from "lucide-react"

const items = [
    {
        icon: Box,
        title: "total orders",
        number: "24",
        color: "bg-purple-100 text-purple-500",
        description: "+3 this month"
    },
    {
        icon: ShoppingCart,
        title: "total spent",
        number: "$2,459",
        color: "bg-blue-100 text-blue-500",
        description: "Lifetime"
    }
]
const UserDashboard = () => {
  return (
    <div className="flex flex-col gap-4">
        <h1 className="text-xl font-semibold">Welcome back, John</h1>
        <p className="text-sm text-gray-500">Here's what's happening with your account</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((item, index) => (
            <Card className="p-4" key={index}>
                <div className="flex flex-col gap-2">
                    {/* icon */}
                    <div className="flex justify-between">
                    <div className={`w-12 h-12 flex items-center justify-center rounded-lg ${item.color}`}>
                    <item.icon className="w-6 h-6" />
                    </div>
                    <p className={`${item.title === "total orders" ? "text-green-600 text-sm" : "text-gray-500 text-sm"}`}>{item.description}</p>
                    </div>
                    <p className="text-sm text-gray-500">{item.title}</p>
                    <p className="text-xl font-bold">{item.number}</p>
                </div>
            </Card>
            ))}
        </div>
        <OrderCard/>
    </div>
  )
}

export default UserDashboard