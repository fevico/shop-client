import { useNavigate } from 'react-router-dom'
import { Card } from '../ui/card'
import { Star } from 'lucide-react'

const ProductCard = ({product}: any) => {

  const navigate = useNavigate()
  const handleCardClick = () => {
    navigate(`/products/${product._id}`)
  }
  
  return (
    <div className=''> 
        <Card
  onClick={handleCardClick}
  className="group overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
>
  <div className="aspect-square overflow-hidden bg-gray-100">
    <img
      src={product.images[0].url}
      alt={product.name}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
  </div>

  <div className="p-5 space-y-1">

    <p className="text-sm text-gray-500">
      {product.category?.name}
    </p>

    <h3 className="font-semibold text-lg">
      {product.name}
    </h3>

    <p className="text-sm text-gray-500 line-clamp-2">
      {product.description}
    </p>

    <div className="flex items-center gap-2 text-sm">
      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />

      <span className="font-medium">
        4.8
      </span>

      <span className="text-gray-500">
        (234)
      </span>
    </div>

    <div className="flex items-center justify-between pt-2">

      <p className="text-2xl font-bold">
        ${product.price.toFixed(2)}
      </p>

      <p className="text-sm text-gray-500">
        {product.stock} in stock
      </p>

    </div>
  </div>
  </Card>
    </div>
  )
}

export default ProductCard