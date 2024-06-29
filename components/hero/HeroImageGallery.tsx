const HeroImageGallery = () => {
  return (
    <div className="container mx-auto p-4 w-full lg:w-[75%]">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:grid-cols-3 md:gap-2 xl:gap-4">
        <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-60 md:col-span-2">
            <img src="/assets/hero-1.svg" loading="lazy" alt="img-1"  className="absolute inset-0 h-full w-full object-cover object-center" />
        </div>

        <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-full md:row-span-2">
            <img src="/assets/hero-2.svg" loading="lazy" alt="img-3"  className="absolute inset-0 h-full w-full object-cover object-center" />
            <div className="absolute h-full w-full flex top-12 gap-6 items-center flex-col">
              <h1 className="text-white font-bold text-4xl">New Launch</h1>
              <p className="text-white text-lg font-semibold">With new vision</p>
            </div>
        </div>
        <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-60">
            <img src="/assets/hero-3.svg" loading="lazy" alt="img-3"  className="absolute inset-0 h-full w-full object-cover object-center" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
        </div>

        <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-60">
            <img src="/assets/hero-5.svg" loading="lazy" alt="img-4"  className="absolute inset-0 h-full w-full object-cover object-center" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
        </div>
      </div>
    </div>
  )
}

export default HeroImageGallery;
