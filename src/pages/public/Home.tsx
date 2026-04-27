import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import FeaturedProduct from "@/components/product/FeaturedProduct";

const Home = () => {

  return (
    <div className="bg-white">
      <HeroSection/>
      <Features/>
      <FeaturedProduct/>
    </div>
  )
}

export default Home