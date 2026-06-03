import { useGetCategoriesQuery } from '@/services/api';
import { Button } from '../ui/button'
import { Card } from '../ui/card'

interface Category {
    _id: string;
    name: string;
    description: string
}
interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategoryFilter = ({ selectedCategory, onCategoryChange }:  CategoryFilterProps ) => {
  const {data, isLoading, error } = useGetCategoriesQuery();

  return (
    <div>
        <Card className="p-6 rounded-2xl space-y-6 sticky top-24">
            <h3 className='font-semibold text-lg mb-4'>Filters</h3>
            <h5>Category</h5> 
            <Button
            className="w-full justify-start rounded-xl"
            onClick={() => onCategoryChange("")}
          >
            All
          </Button>
            <div className='space-y-4'>
                {isLoading ? (
                    <p>Loading categories...</p>
                ) : error ? (
                    <p>Failed to load categories</p>
                ) : (
                    data?.categories.map((category: Category, index: number) => (
                        <div key={index} className='flex items-center '>
                            <Button onClick={() => onCategoryChange(category._id)} variant={selectedCategory === category._id ? "default" : "ghost"}
                             size="sm" className='text-left text-sm py-4 font-semibold hover:bg-gray-200 rounded-md w-full justify-start'>
                                {category.name}
                            </Button>
                    </div>
                )))
            }
            </div>
        </Card>
    </div>
  )
}

export default CategoryFilter