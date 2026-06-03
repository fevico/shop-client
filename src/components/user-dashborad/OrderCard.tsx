import { CircleCheckBig, Truck, Clock3 } from "lucide-react";
import { Card } from "../ui/card";
import { Spinner } from "../ui/spinner";

const statusStyles = {
  delivered: {
    icon: CircleCheckBig,
    className: "bg-green-100 text-green-600",
  },

  shipped: {
    icon: Truck,
    className: "bg-blue-100 text-blue-600",
  },

  pending: {
    icon: Clock3,
    className: "bg-yellow-100 text-yellow-600",
  },
};

const OrderCard = ({data, isLoading}: any) => {

if (isLoading) {
  return (
    <div className="flex items-center justify-center min-h-[300px]">
      <Spinner className="w-10 h-10" />
    </div>
  );
} 

  return (
    <div>
      <Card className="w-full p-4">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg">
            Recent Orders
          </h3>

          <p className="text-sm text-purple-600 cursor-pointer">
            View all
          </p>
        </div>

        <hr className="my-4" />

        <div>
          {data?.orders?.map((order: any) => {

            const firstItem = order.orderItems[0];

            const statusConfig =
              statusStyles[
                order.status as keyof typeof statusStyles
              ];

            const StatusIcon = statusConfig.icon;

            return (
              <div
                key={order._id}
                className="flex items-center justify-between border-b py-4"
              >
                {/* LEFT */}
                <div className="flex gap-3">

                  <img
                    src={firstItem.productId.images[0].url}
                    alt={firstItem.productId.name} 
                    className="h-14 w-14 rounded-lg object-cover"
                  />

                  <div className="flex flex-col gap-1">
  
                    <h1 className="font-medium">
                      {order.orderNumber}
                    </h1>

                    <span className="text-sm text-gray-500">
                      {new Date(order.createdAt).toDateString()} •{" "}
                      {order.orderItems.length} item(s)
                    </span>

                    {/* STATUS */}
                    <div
                      className={`flex w-fit items-center gap-1 rounded-full px-3 py-1 text-xs ${statusConfig.className}`}
                    >
                      <StatusIcon className="h-4 w-4" />

                      <span className="capitalize">
                        {order.status}
                      </span>
                    </div>

                  </div>

                </div>

                {/* RIGHT */}
                <p className="font-semibold">
                  ${order.totalAmount}
                </p>

              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default OrderCard;