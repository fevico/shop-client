import { Button } from '../ui/button'
import { Pencil, Plus, Trash } from 'lucide-react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { useNavigate } from 'react-router-dom';
import { useGetProductsQuery } from '@/services/api';
import { Spinner } from '../ui/spinner';

const ProductList = () => {
    const navigate = useNavigate();
    const {data, isLoading} = useGetProductsQuery({})

    if (isLoading) {
      return (
        <div className="flex items-center justify-center min-h-[300px]">
          <Spinner className="w-10 h-10" />
        </div>
      );
    }

    return (
    <div>
        <div className='flex justify-between items-center mb-4'>
            <h2 className='text-xl font-bold'>Products</h2>
            <Button onClick={() => navigate('/admin/add-product')} className='bg-purple-600 p-2' size="lg"><Plus /> Add Product</Button>
        </div>
        <div>
            <Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="">Image</TableHead>
      <TableHead>Product Name</TableHead>
      <TableHead>Category</TableHead>
      <TableHead className="">Stock</TableHead>
      <TableHead className="">Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {isLoading ? (
      <div className="flex h-screen justify-center">
        <Spinner className="size-8"/>
      </div>
    ) : (
      data.products.map((product: any, index: number) => (
      <TableRow key={index}>
      <TableCell className="font-medium">
        <img src={product.images[0].url} alt={product.name} className="w-16 h-16 object-cover" />
      </TableCell>
      <TableCell>{product.name}</TableCell>
      <TableCell>{product.category.name}</TableCell>
      <TableCell className="">{product.stock}</TableCell>
      <TableCell className="">
        <div className='flex gap-2'>
          {/* edit icon */}
          <button className='text-blue-500 hover:text-blue-700' onClick={() => navigate(`/admin/edit-product/${product._id}`)}>
            <Pencil className='w-5 h-5'/>
            </button>
            {/* delete icon */}
          <button className="text-red-500 hover:text-red-700">
            <Trash className="w-5 h-5"/>
            </button>
        </div>
 
      </TableCell>
    </TableRow>

      ))
    )}

  </TableBody>
</Table>
        </div>
    </div>
  )
}

export default ProductList