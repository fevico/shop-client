import { useGetProductDetailsQuery } from '@/services/api';
import { Box, Shield, ShoppingCart, Star, Van } from 'lucide-react'
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../ui/button';
import { Spinner } from '../ui/spinner';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/slice/cartSlice';
import { useState } from 'react';
import { showToast } from '@/lib/toast.';
import ProductImageGallery from './ProductImageGallery';

const ProductDetails = () => {
    const { id } = useParams(); 
    const {data, isLoading} = useGetProductDetailsQuery(id)
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();
    if(isLoading) {
        return <div className='flex justify-center items-center h-screen'>
            <Spinner />
        </div> 
    } 

    const dispatch = useDispatch();

    const handleAddToCart = () => {
      try {
            dispatch(addToCart({
            productId: data.product._id,
            name: data.product.name,
            price: data.product.price, 
            image: data.product.images[0].url,
            quantity,
            stock: data.product.stock,
        }))
          showToast.success("Added to cart", `${data.product.name} has been added.`);
      } catch (error) {
          showToast.error("Failed to add product", `${data.product.name} has been added.`);
      }
    }

    const handleBuyNow = () => {
        dispatch(addToCart({
            productId: data.product._id,
            name: data.product.name,
            price: data.product.price, 
            image: data.product.images[0].url,
            quantity,
            stock: data.product.stock,
        }))
        showToast.success("Added to cart", `${data.product.name} has been added.`);
        navigate('/cart');
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
                <div className=''>
                    {/* <img src={data?.product.images[0].url} alt="product image" className="w-full h-150 object-cover rounded-2xl" /> */}
                    <ProductImageGallery images={data?.product.images || []} />
                </div>
                {/* details */}
                <div className=''>
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
  <button className="px-4 py-2 hover:bg-gray-100" onClick={() => setQuantity((prev : any) => prev > 1 ? prev -  1 : 1)}>
    -
  </button>

  <span className="px-6 font-medium">
    {quantity}
  </span>

  <button className="px-4 py-2 hover:bg-gray-100" onClick={() => setQuantity((prev : any) => prev < data?.product.stock ? prev + 1 : prev)}>
    +
  </button>
</div>
                    {/* add to cart */}
<div className="flex gap-4">
  <Button
    variant="outline"
    size="lg"
    className="flex-1 py-2 hover:bg-black hover:text-white"
    onClick={handleAddToCart}
  >
    <ShoppingCart/>Add to Cart
  </Button>

  <Button
    size="lg"
    className="flex-1 bg-black hover:bg-black/90"
    onClick={handleBuyNow}
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