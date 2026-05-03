import { Button } from '../ui/button'
import { Card } from '../ui/card'

const categories = [
    "Electronics",
    "Clothing",
    "Home & Kitchen",
    "Books",
    "Toys & Games",
    "Sports & Outdoors",
]
const CategoryFilter = () => {
  return (
    <div>
        <Card className='p-4 rounded-lg border max-h-screen py-4 overflow-y-auto'>
            <h3 className='font-semibold text-lg mb-4'>Filters</h3>
            <h5>Category</h5> 
            <div className='space-y-4'>
                {categories.map((category, index) => (
                    <div key={index} className='flex items-center '>
                        <Button variant="ghost" size="sm" className='text-left text-sm py-4 font-semibold hover:bg-gray-200 rounded-md w-full justify-start'>
                            {category}
                        </Button>
                    </div>
                ))}
            </div>
        </Card>
    </div>
  )
}

export default CategoryFilter