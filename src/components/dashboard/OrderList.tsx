import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'

const OrderList = () => {
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
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>  
      <TableCell>Credit Card</TableCell>
      <TableCell>$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>
        </div>
    </div>
  )
}

export default OrderList