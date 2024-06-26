const HeroImageGallery = () => {
  return (
    <div className="container mx-auto p-4 w-[75%]">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-2 xl:gap-4">
        <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 md:col-span-2">
            <img src="/assets/hero-1.png" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center" />
        </div>

        <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-full md:row-span-2">
            <img src="/assets/hero-4.png" loading="lazy" alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
        </div>

        <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
            <img src="/assets/hero-2.png" loading="lazy" alt="Photo by Martin Sanchez" className="absolute inset-0 h-full w-full object-cover object-center" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
        </div>

        <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
            <img src="/assets/hero-3.png" loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
        </div>
      </div>
    </div>
  )
}

export default HeroImageGallery;
