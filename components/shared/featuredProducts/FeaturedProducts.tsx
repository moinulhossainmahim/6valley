'use client';

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

import { getProducts } from "@/app/services/getProducts";
import { Badge } from "@/components/ui/badge";
import { IProduct } from "@/app/types/Product";
import { isNewProduct } from "@/utils/isNewProduct";
import SkeletonLoader from "../skeleton-loader";
import Stars from "../stars";

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
      {data.products.map((product: IProduct) => (
        <div className="col-span-1 flex flex-col items-center group p-2 bg-white shadow-md rounded-md" key={product.id}>
          <div className="aspect-square w-full relative overflow-hidden mb-4">
            <Image fill  className="object-cover h-full w-full group-hover:scale-110 transition"
              src={`https://6valley.6amtech.com/storage/app/public/product/${product.images[0]}`}
              alt="product-1"
            />
            <div className="absolute top-0 left-0 flex flex-col gap-2">
              {isNewProduct(product.created_at) ? (
                <Badge>New</Badge>
              ) : null}
              {product?.discount ? (
                <Badge variant='destructive'>-{product.discount}%</Badge>
              ) : null}
            </div>
          </div>
          <div className="flex items-center flex-col">
            <div className="flex">
              <Stars count={2} />
              <p className="text-[#9B9B9B]">(10)</p>
            </div>
            <p className="text-[#9B9B9B] text-sm">{product.category.name}</p>
            <h4 className="font-semibold">{product.name.length > 20 ? `${product.name.substring(0, 20)}...` : product.name}</h4>
            <div className="flex gap-1">
              {product.discount ? (
                <span className="line-through text-[#9B9B9B]">{product.unit_price}$</span>
              ) : null}
              <span>{product.purchase_price}$</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FeaturedProducts;
