import { CircleCheckBig, Truck, Clock3 } from 'lucide-react'
import React from 'react'
import { Card } from '../ui/card'

const orders = [
    {
        oderNumber: "ORD-2451",
        quantity: 2,
        date: "Apr 18, 2026",
        status: "Delivered",
        total: "$159.99"
    },
    {
        oderNumber: "ORD-2450",
        quantity: 1,
        date: "Apr 15, 2026 ",
        status: "In Transit",
        total: "$159.99"
    },
    {
        oderNumber: "ORD-2449",
        quantity: 3,
        date: "Apr 10, 2026",
        status: "Processing",
        total: "$159.99"
    },
]

const statusStyles = {
  Delivered: {
    icon: CircleCheckBig,
    className: "bg-green-100 text-green-600"
  },

  "In Transit": {
    icon: Truck,
    className: "bg-blue-100 text-blue-600"
  },

  Processing: {
    icon: Clock3,
    className: "bg-yellow-100 text-yellow-600"
  }
};
const OrderCard = () => {
  return (
    <div>
        <Card className="w-full p-4" >
            <div className="flex justify-between">
            <h3>Recent Orders</h3>
            <p>view all</p>
            </div>
            <hr />

            <div className="justify between p-4">
                {orders.map((item, index) => {

  const statusConfig =
    statusStyles[item.status as keyof typeof statusStyles];

  const StatusIcon = statusConfig.icon;

  return (
    <div
      key={index}
      className="flex items-center justify-between border-b py-4"
    >

      <div className="flex gap-3">

        <img
          src="https://via.placeholder.com/60"
          alt=""
          className="h-14 w-14 rounded-lg object-cover"
        />

        <div className="flex flex-col gap-1">

          <h1 className="font-medium">
            {item.oderNumber}
          </h1>

          <span className="text-sm text-gray-500">
            {item.date} • {item.quantity} item
          </span>

          {/* STATUS */}
          <div
            className={`flex w-fit items-center gap-1 rounded-full px-3 py-1 text-xs ${statusConfig.className}`}
          >

            <StatusIcon className="h-4 w-4" />

            <span>{item.status}</span>

          </div>

        </div>

      </div>

      <p className="font-semibold">
        {item.total}
      </p>

    </div>
  );
})}

</div>
        </Card>
    </div>
  )
}

export default OrderCard