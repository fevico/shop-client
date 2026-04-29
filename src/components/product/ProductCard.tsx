import { Card } from '../ui/card'
import { Star } from 'lucide-react'

const ProductCard = ({product}: any) => {
  return (
    <div className=''> 
        <Card className='group max-w-sm flex flex-col rounded-xl transition-all duration-300 ease-in-out hover:-translate-y-4 hover:shadow-lg cursor-pointer'>
            <div className="h-52 overflow-hidden bg-gray-100">
                <img src={product.image} alt={product.name} className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105' />
            </div>

            {/* content */}
            <div className="p-4">
              <h3  className="font-medium">{product.title}</h3>
              {/* rating */}
              <div className='flex gap-2'>
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400"/>
                {product.rating} ({product.reviews})
              </div> 
              {/* price */}
              <div>
                <p>${product.price.toFixed(2)}</p>
              </div>
            </div>
        </Card>
    </div>
  )
}

export default ProductCard