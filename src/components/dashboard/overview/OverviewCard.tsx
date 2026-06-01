import { Card } from '@/components/ui/card'
import { DollarSign, ShoppingCart, UserRound } from 'lucide-react'
import RevenueGraph from './RevenueGraph';
import OrdersGraph from './OrdersGraph';
import { useGetAdminDashboardStatsQuery } from '@/services/api';
import { Spinner } from '@/components/ui/spinner';

const OverviewCard = () => {
    const {data, isLoading} = useGetAdminDashboardStatsQuery()
    console.log("overview", data)
 const revenue = data?.kpis?.revenue;
const orders = data?.kpis?.orders;
const customers = data?.kpis?.customers;
const products = data?.kpis?.products;
const stats = data?.chartData || [];

const items = [
  {
    title: "Total Revenue",
    icon: DollarSign,
    total: `$${revenue?.value ?? 0}`,
    description: "This month",
    color: "bg-purple-100 text-purple-600",
    percentage: revenue?.percentage ?? 0,
  },
  {
    title: "Total Orders",
    icon: ShoppingCart,
    total: orders?.value ?? 0,
    description: "This month",
    color: "bg-blue-100 text-blue-600",
    percentage: orders?.percentage ?? 0,
  },
  {
    title: "Total Customers",
    icon: UserRound,
    total: customers?.value ?? 0,
    description: "Active users",
    color: "bg-green-100 text-green-600",
    percentage: customers?.percentage ?? 0,
  },
  {
    title: "Products",
    icon: DollarSign,
    total: products?.value ?? 0,
    description: "In inventory",
    color: "bg-red-100 text-red-600",
    percentage: products?.percentage ?? 0,
  },
];

if (isLoading) {
  return (
    <div className="flex items-center justify-center min-h-[300px]">
      <Spinner className="w-10 h-10" />
    </div>
  );
}

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((item, index) => (
        <Card key={index} className="w-full p-4 rounded-xl">
          <div className="flex justify-between items-start">
            {/* Icon */}
            <div className={`w-12 h-12 flex items-center justify-center rounded-lg ${item.color}`}>
              <item.icon className="w-6 h-6" />
            </div>

            {/* Percentage */}
          <p className={`text-sm mt-2 ${
                  item.percentage > 0
                     ? "text-green-500"
                    : item.percentage < 0
                    ? "text-red-500"
                  : "text-gray-500"
            }`}
          >
            {item.percentage > 0 && "+"}
            {item.percentage}%
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

      {/* leftt side */}
      <div className="flex">
      <RevenueGraph stats={stats}/>
      </div>

      {/* right side */}
      <div className="">
      <OrdersGraph stats={stats}/>
      </div>
    </div>
    </div>

  );
};

export default OverviewCard