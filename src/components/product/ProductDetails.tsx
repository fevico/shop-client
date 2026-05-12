import { useGetProductDetailsQuery } from '@/services/api';
import { Box, Shield, ShoppingCart, Star, Van } from 'lucide-react'
import { useParams } from 'react-router-dom';
import { Button } from '../ui/button';
import { Spinner } from '../ui/spinner';

const ProductDetails = () => {
    const { id } = useParams();
    const {data, isLoading} = useGetProductDetailsQuery(id)
    if(isLoading) {
        return <div className='flex justify-center items-center h-screen'>
            <Spinner />
        </div> 
    }

  return (
    <div>  
<div className="max-w-7xl mx-auto px-6 py-10">
  <p className="mb-6 text-sm text-gray-500">
    Back to shop
  </p>
            {/* <div className='flex gap-6'> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                {/* image */}
                <div className='flex-1'>
                    <img src={data?.product.images[0].url} alt="product image" className="w-full h-[600px] object-cover rounded-2xl" />
                </div>
                {/* details */}
                <div className='flex-1'>
                    <div className='flex flex-col gap-4'>
                    <p className="text-sm text-gray-500 uppercase tracking-wide">
                        {data?.product.category.name}
                        </p>
                   <h2 className='text-xl font-semibold'>{data?.product.name}</h2>
                    <div className="flex gap-2 ">
                        <span className="fill text-yellow-400"><Star className="w-5 h-5 fill-yellow-400 text-yellow-400"/></span>
                        <div className=" font-semibold ">4.8 <span className="text-gray-500 text-sm">(234 reviews)</span> </div>
                    </div>
                    <h3 className="font-semibold text-xl">${data?.product.price.toFixed(2)}</h3>
                    <p className="text-sm text-gray-400">{data?.product.description}</p>
                   <div className="flex items-center gap-2 p-4 bg-gray-100 rounded-xl">
  <Box className="w-5 h-5 text-gray-600" />
  <span className="font-medium">
    {data?.product.stock} in stock
  </span>
</div>
                    {/* increasee and descreae quantity */}
                    <div className="flex items-center border rounded-xl w-fit overflow-hidden">
  <button className="px-4 py-2 hover:bg-gray-100">
    -
  </button>

  <span className="px-6 font-medium">
    1
  </span>

  <button className="px-4 py-2 hover:bg-gray-100">
    +
  </button>
</div>
                    {/* add to cart */}
<div className="flex gap-4">
  <Button
    variant="outline"
    size="lg"
    className="flex-1 py-2 hover:bg-black hover:text-white"
  >
    <ShoppingCart/>Add to Cart
  </Button>

  <Button
    size="lg"
    className="flex-1 bg-black hover:bg-black/90"
  >
    Buy Now
  </Button>
</div>     
{/* shipping */}
    <div className='flex gap-2'>
        <Van/> 
        <div className='flex-col'>
        <span className='font-semibold'>Free Shipping</span>
        <p className='text-sm text-gray-400'>On orders over $50</p>
        </div>
    </div>
    {/* secure payment */}
    <div className='flex gap-2'>
        <Shield/> 
        <div className='flex-col'>
        <span className='font-semibold'>Secure Payment</span>
        <p className='text-sm text-gray-400'>Your payment information is safe</p>
        </div>
    </div>

</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails