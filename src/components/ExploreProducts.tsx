import { ArrowRight } from "lucide-react"
import { Button } from "./ui/button"
import { Card } from "./ui/card"

const ExploreProducts = () => {
  return (
    <div className="px-10 mt-16">
           <Card className="w-full py-16 rounded-2xl bg-[#020617] text-white text-center">
        
        <div className="flex flex-col items-center gap-4">

          {/* Title */}
          <h2 className="text-xl font-semibold">
            Ready to Start Shopping?
          </h2>

          {/* Subtitle */}
          <p className="text-gray-300 text-lg  max-w-xl">
            Browse our full catalog and find exactly what you're looking for
          </p>

          {/* Button */}
          <Button className="mt-4 bg-white text-black hover:bg-gray-200 flex items-center gap-2 px-5 py-2">
            Explore All Products
            <ArrowRight size={16} />
          </Button>

        </div>
      </Card>

    </div>
  )
}

export default ExploreProducts