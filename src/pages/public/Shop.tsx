import ProductCard from "@/components/product/ProductCard"
import CategoryFilter from "@/components/shop/CategoryFilter"
import { useGetProductsQuery } from "@/services/api"

const Shop = () => { 
    const {data, isLoading, error} = useGetProductsQuery()

  return (
    <div className="px-12 pt-10">
      <h3 className="text-xl font-semibold">Shop All Products</h3>
      <p className="text-gray-600">Discover our complete collection</p>
      <div className="flex gap-4">
        <div className="w-full max-w-[250px]">    
          {/* <CategoryFilter /> */}
          <CategoryFilter />
        </div>  

        <div className="flex-1">
          {/* <ProductList /> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data?.products.map((item: any, index: number) => (
            <ProductCard key={index} product={item} />
          ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop