import ExploreProducts from "@/components/ExploreProducts";
import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import FeaturedProduct from "@/components/product/FeaturedProduct";
import TopRated from "@/components/product/TopRated";

const Home = () => {

  return (
    <div className="bg-white">
      <HeroSection/>
      <Features/>
      <FeaturedProduct/>
      {/* top rated product */}
        <TopRated />
        <ExploreProducts/>
    </div>
  )
}

export default Home