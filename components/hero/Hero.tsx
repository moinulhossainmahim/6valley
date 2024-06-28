import Categories from "./Categories";
import HeroImageGallery from "./HeroImageGallery";

const Hero = () => {
  return (
    <div className="px-2 2xl:px-[10%] bg-[#fcfcfc] flex">
      <Categories />
      <HeroImageGallery />
    </div>
  )
}

export default Hero;
