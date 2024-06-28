import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Stars from "../stars";
import { Separator } from "@/components/ui/separator";

const AllProducts = () => {
  return (
    <div className="flex justify-center py-20 bg-[#fcfcfc]">
      <div className="w-[80%]">
        <h1 className="font-bold text-lg mb-4">All Products</h1>
        <Separator className="mb-4" />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          <div className="col-span-1 flex flex-col items-center group p-2 bg-white shadow-md rounded-md">
            <div className="aspect-square w-full relative overflow-hidden mb-4">
              <Image  className="object-cover h-full w-full group-hover:scale-110 transition"
                src='/assets/p-2.png'
                alt="product-2"
                height={100}
                width={100}
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
      </div>
    </div>
  )
}

export default AllProducts;
