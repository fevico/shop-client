import OrderCard from "@/components/user-dashborad/OrderCard"
import { useGetMyOrdersQuery } from "@/services/api";
import { useState } from "react";

const Orders = () => {
  const [page, setPage] = useState(1)
    const { data, isLoading } = useGetMyOrdersQuery({page, limit: 5});
  return (
    <div>
      <OrderCard data={data} isLoading={isLoading} page={page} setPage={setPage}/>
    </div>
  )
}

export default Orders