import { useNavigate } from 'react-router-dom'
import { Card } from '../ui/card'
import { Star } from 'lucide-react'

interface ProductCardProps {
  product: any;
  variant?: 'home' | 'shop';
}

const getMockRatingAndReviews = (name: string) => {
  const normalized = name.toLowerCase();
  if (normalized.includes("headphones") || normalized.includes("headphone")) {
    return { rating: 4.8, reviews: 234 };
  }
  if (normalized.includes("watch")) {
    return { rating: 4.6, reviews: 189 };
  }
  if (normalized.includes("backpack") || normalized.includes("bag")) {
    return { rating: 4.7, reviews: 156 };
  }
  if (normalized.includes("keyboard")) {
    return { rating: 4.9, reviews: 312 };
  }
  // Deterministic fallback based on name character codes
  let sum = 0;
  for (let i = 0; i < name.length; i++) {
    sum += name.charCodeAt(i);
  }
  const rating = (4.0 + (sum % 10) / 10).toFixed(1);
  const reviews = 50 + (sum % 450);
  return { rating: parseFloat(rating), reviews };
};

const ProductCard = ({ product, variant = 'shop' }: ProductCardProps) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/products/${product._id}`);
  };

  const { rating, reviews } = getMockRatingAndReviews(product.name);
  
  return (
    <div> 
      <Card
        onClick={handleCardClick}
        className="group overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-white dark:bg-zinc-950 border border-gray-100 dark:border-zinc-800"
      >
        {/* IMAGE */}
        <div className="aspect-square overflow-hidden bg-gray-100 dark:bg-zinc-900">
          <img
            src={product.images && product.images[0] ? product.images[0].url : '/images/placeholder.png'}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* DETAILS FOR HOME VARIANT */}
        {variant === 'home' ? (
          <div className="p-5 space-y-1.5">
            <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100 leading-tight">
              {product.name}
            </h3>

            <div className="flex items-center gap-1.5 text-sm">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium text-gray-800 dark:text-gray-200">
                {rating}
              </span>
              <span className="text-gray-500 dark:text-gray-400">
                ({reviews})
              </span>
            </div>

            <div className="pt-2">
              <p className="text-xl font-bold text-gray-900 dark:text-gray-100">
                ${product.price.toFixed(2)}
              </p>
            </div>
          </div>
        ) : (    
          /* DETAILS FOR SHOP VARIANT */
          <div className="p-5 space-y-2">
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              {product.category?.name || 'Uncategorized'}
            </p>

            <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100 leading-tight">
              {product.name}
            </h3>

            <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
              {product.description}
            </p>

            <div className="flex items-center gap-1.5 text-sm">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium text-gray-800 dark:text-gray-200">
                {rating}
              </span>
              <span className="text-gray-500 dark:text-gray-400">
                ({reviews})
              </span>
            </div>

            <div className="flex items-center justify-between pt-2">
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                ${product.price.toFixed(2)}
              </p>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                {product.stock} in stock
              </p>
            </div>
          </div>
        )}
      </Card>
    </div>
  )
}

export default ProductCard