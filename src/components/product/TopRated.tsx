import { Star } from "lucide-react";
import { Card } from "../ui/card";

const products = [
    {
    title: "Mechanical Keyboard",
    price: 149.99,
    rating: 4.9,
    reviews: 312,
    image: "/images/keyboard.jfif",
  },
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
];

const TopRated = () => {
  return (
    <div className='w-full mt-20 bg-gray-100 py-14 space-y-2'>
        <div className='max-w-7xl mx-auto px-6'>
        <h3 className="text-lg font-semibold">Top Rated Products</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((item, index) => (
            <Card key={index} className="p-4 rounded-xl bg-white">
                <div className="flex items-center gap-4">
                    <div>
                        <img src={item.image} alt={item.title} className="w-20 h-20 rounded-md object-cover" />
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <div className="flex gap-2 items-start">
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400"/>
                        <p>{item.rating}</p>
                        </div>
                        <p className="text-sm font-semibold">${item.price}</p>
                    </div>
                </div>
            </Card>
        ))}
        </div>
        </div>
        </div>
  )
}

export default TopRated