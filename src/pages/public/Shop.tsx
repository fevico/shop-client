import ProductCard from "@/components/product/ProductCard"
import CategoryFilter from "@/components/shop/CategoryFilter"
import { Spinner } from "@/components/ui/spinner"
import { useGetProductsQuery } from "@/services/api"

const Shop = () => { 
    const {data, isLoading} = useGetProductsQuery()

    if (isLoading) {
        return ( 
          <div className="flex items-center justify-center min-h-[300px]">
            <Spinner className="w-10 h-10" />
          </div>
        );
      } 

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h3 className="text-xl font-semibold">Shop All Products</h3>
      <p className="text-gray-600">Discover our complete collection</p>
      <div className="flex gap-8 items-start mt-8">
        <div className="w-full max-w-[280px]">    
          {/* <CategoryFilter /> */}
          <CategoryFilter />
        </div>  

        <div className="flex-1">
          {/* <ProductList /> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data?.products.map((item: any, index: number) => (
            <ProductCard key={index} product={item} variant="shop" />
          ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop