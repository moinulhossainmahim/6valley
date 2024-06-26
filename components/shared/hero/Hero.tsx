import Categories from "./Categories";
import HeroImageGallery from "./HeroImageGallery";

const Hero = () => {
  return (
    <div className="px-[10%] bg-[#fcfcfc] flex gap-[5%]">
      <Categories />
      <HeroImageGallery />
    </div>
  )
}

export default Hero;
