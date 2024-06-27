'use client';

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

import Stars from "../stars";
import { Badge } from "@/components/ui/badge";
import { getProducts } from "@/services/getProducts";
import SkeletonLoader from "../skeleton-loader";

const FeaturedProducts = () => {
  const { data, isLoading, isError, isFetching } = useQuery({
    queryFn: getProducts,
    queryKey: ['featured']
  })

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).map((value) => (
          <div className="col-span-1 flex flex-col items-center group p-2 bg-white shadow-md rounded-md">
            <SkeletonLoader />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      <div className="col-span-1 flex flex-col items-center group p-2 bg-white shadow-md rounded-md">
        <div className="aspect-square w-full relative overflow-hidden mb-4">
          <Image fill  className="object-cover h-full w-full group-hover:scale-110 transition"
            src='/assets/p-1.png'
            alt="product-1"
          />
          <div className="absolute top-0 left-0 flex flex-col gap-2">
            <Badge>New</Badge>
            <Badge variant='destructive'>-20%</Badge>
          </div>
        </div>
        <div className="flex items-center flex-col">
          <div className="flex">
            <Stars count={2} />
            <p className="text-[#9B9B9B]">(10)</p>
          </div>
          <p className="text-[#9B9B9B]">Morning Mart</p>
          <h4 className="font-semibold">Evening Dress</h4>
          <div className="flex gap-1">
            <span className="line-through text-[#9B9B9B]">12$</span>
            <span>10$</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts;
