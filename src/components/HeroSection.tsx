import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
const navigate = useNavigate();

  return (
    <div>
             {/* HERO SECTION */}
      <section className="min-h-[85vh] flex items-center bg-gradient-to-b from-gray-200 to-white px-10">
        
        {/* CONTENT */}
        <div className="max-w-3xl flex flex-col gap-6">
          
          {/* TITLE */}
          <h1 className="text-5xl font-bold leading-tight">
            Discover Amazing Products <br />
            at Great Prices
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-500 text-lg leading-relaxed">
            Shop from our curated collection of quality products across 
            electronics, sports, home, <br/> and accessories.
          </p>

          {/* BUTTON */}
          <Button
            className="w-fit px-6 py-4 text-base"
            onClick={() => navigate('/shop')}
          >
            Shop Now 
            <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  )
}

export default HeroSection