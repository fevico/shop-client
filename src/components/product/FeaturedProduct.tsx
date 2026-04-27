import { ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";

const products = [
  {
    title: "Wireless Headphones",
    price: 299.99,
    rating: 4.8,
    reviews: 234,
    image: "/images/headphone.jfif",
  },
  {
    title: "Smart Watch",
    price: 399.99,
    rating: 4.6,
    reviews: 189,
    image: "/images/watch.jfif",
  },
  {
    title: "Laptop Backpack",
    price: 79.99,
    rating: 4.7,
    reviews: 156,
    image: "/images/bag.jfif",
  },
  {
    title: "Mechanical Keyboard",
    price: 149.99,
    rating: 4.9,
    reviews: 312,
    image: "/images/keyboard.jfif",
  },
];

const FeaturedProduct = () => {
  return (
    <div className="px-10 mt-20">
        <div className="flex items-center justify-between mb-6">
          <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">Featured product</h2>
          <p className="textgray-500">Check out our handpicked selection</p>
          </div>
          <button className="flex items-center gap-2 text-sm font-medium hover:underline">
          View All <ArrowRight size={16} />
        </button>
        </div>

        {/* product card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((item, index) => (
            <ProductCard key={index} product={item}/>
          ))}
        </div>
    </div>
  )
}

export default FeaturedProduct