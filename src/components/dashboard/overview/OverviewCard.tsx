import { Card } from '@/components/ui/card'
import { DollarSign, ShoppingCart, UserRound } from 'lucide-react'

const items = [
    {
        title: "Total Revenue",
        icon: DollarSign,
        total: "$12,345",
        description: "This month",
        color: "bg-purple-100 text-purple-600",
        percentage: "+12.1%"
    },
    {
        title: "Total orders",
        icon: ShoppingCart,
        total: "1,443",
        description: "This month",
        color: "bg-blue-100 text-blue-600",
        percentage: "+8.2%"
    },
    {
        title: "Total Customers",
        icon: UserRound,
        total: "8,245",
        description: "Active users",
        color: "bg-green-100 text-green-600",
        percentage: "+15.3%"
    },
    {
        title: "Products",
        icon: DollarSign,
        total: "423",
        description: "In inventory",
        color: "bg-red-100 text-red-600",
        percentage: "-3.1%"
    }
]
const OverviewCard = () => {
  return (
    <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((item, index) => (
        <Card key={index} className="w-full p-4 rounded-xl">
          <div className="flex justify-between items-start">
            {/* Icon */}
            <div className={`w-12 h-12 flex items-center justify-center rounded-lg ${item.color}`}>
              <item.icon className="w-6 h-6" />
            </div>

            {/* Percentage */}
          <p className={`text-sm mt-2 ${
              item.percentage.startsWith("+")
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {item.percentage}
          </p>

          </div>

            <div className="flex flex-col gap-2">
              <p className="text-sm text-gray-500">{item.title}</p>
              <h2 className="text-2xl font-bold">{item.total}</h2>
              <p className="text-xs text-gray-400">{item.description}</p>
            </div>
        </Card>
      ))}
    </div>
    {/* overview graph */}
    <div className="flex gap-4 w-full">
      {/* leftt side */}
      <div className="flex-1">

      </div>
      {/* right side */}
      <div className="flex-1">

      </div>
    </div>
    </div>

  );
};

export default OverviewCard