import { useDeleteOrderMutation, useGetOrdersQuery, useUpdateOrderStatusMutation } from '@/services/api'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Spinner } from '../ui/spinner'
import { Pencil, Trash2 } from 'lucide-react';
import ConfirmDialog from '../modal/ConfirmDialog';
import { showToast } from '@/lib/toast.';
import { useState } from 'react';
import UpdateOrderStatusModal from '../modal/UpdateOrderStatus';

const statusStyles = {
  delivered: {
    className: "bg-green-100 text-green-600",
  },

  shipped: {
    className: "bg-blue-100 text-blue-600",
  },

  pending: {
    className: "bg-yellow-100 text-yellow-600",
  },
};

const OrderList = () => {
  const {data, isLoading} = useGetOrdersQuery()
  const [deleteOrder, {isLoading: isDeleting}] = useDeleteOrderMutation()
  const [updateOrderStatus, {isLoading: isEditing}] = useUpdateOrderStatusMutation()
  console.log("orders", data)
  
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[300px]">
        <Spinner className="w-10 h-10" />
      </div>
    );
  } 
   
  const handleDeleteOrder = async (orderId: string) => {
  try {
    await deleteOrder(orderId).unwrap();

    showToast.success("Order deleted successfully");
  } catch (error: any) {
    showToast.error(
      error?.data?.message || "Failed to delete order"
    );
  }
};

const handleUpdateStatus = async (
  orderId: string,
  status: string
) => {
  try {
    await updateOrderStatus({
      orderId,
      status,
    }).unwrap();

    showToast.success(
      "Order status updated successfully"
    );

    setIsModalOpen(false);
  } catch (error: any) {
    showToast.error(
      error?.data?.message ||
        "Failed to update order status"
    );
  }
};

  return (
    <div>
        <h1 className="text-lg font-bold">Orders Management</h1>
        <div>
            <Table>
  <TableCaption>A list of your recent order.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Order Id</TableHead>
      <TableHead>Customer</TableHead>
      <TableHead>Date</TableHead>
      <TableHead>Total</TableHead>
      <TableHead className="">Status</TableHead>
      <TableHead className="">Action</TableHead>  
    </TableRow>
  </TableHeader>

<TableBody>
  {data?.orders?.map((order: any, index: number) => {

    const statusConfig =
      statusStyles[
        order.status as keyof typeof statusStyles
      ]; 

    return (
      <TableRow key={index}>

        <TableCell className="font-medium">
          {order.orderNumber}
        </TableCell>

        <TableCell>
          {order.userId.name}
        </TableCell>

        <TableCell>
          {new Date(order.createdAt).toDateString()}
        </TableCell>

        <TableCell>
          ${order.totalAmount}
        </TableCell>

        <TableCell>

          <span
            className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${statusConfig.className}`}
          >
            {order.status}
          </span>

        </TableCell>

        <TableCell>
          <div className="flex gap-2">
            <span className="cursor-pointer text-blue-600" 
            onClick={()=> {
              setSelectedOrder(order);
              setIsModalOpen(true);
              }}>
              <Pencil size={20} />
            </span>
            
            <ConfirmDialog
            title="Delete Order"
            description="This action cannot be undone."
            onConfirm={() => handleDeleteOrder(order._id)}
            trigger={
    <span className="cursor-pointer text-red-500">
      <Trash2 size={20} />
    </span>
  }
/>
          </div>
        </TableCell>

      </TableRow>
    );
  })}  
</TableBody>

</Table>
    <UpdateOrderStatusModal
  open={isModalOpen}
  onOpenChange={setIsModalOpen}
  order={selectedOrder}
  isLoading={isEditing}
  onUpdate={handleUpdateStatus}
/>
      </div>
    </div>
  )
}

export default OrderList