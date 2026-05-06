import { Button } from '../ui/button'
import { Plus } from 'lucide-react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'

const ProductList = () => {
  return (
    <div>
        <div className='flex justify-between items-center mb-4'>
            <h2 className='text-xl font-bold'>Products</h2>
            <Button className='bg-purple-600 p-2' size="lg"><Plus /> Add Product</Button>
        </div>

        <div>
            <Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>
        </div>
    </div>
  )
}

export default ProductList