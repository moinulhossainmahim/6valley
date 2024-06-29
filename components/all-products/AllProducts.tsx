'use client';

import { useQuery } from "@tanstack/react-query";

import { Separator } from "@/components/ui/separator";
import { getData } from "@/app/services";
import { IProduct } from "@/app/types";
import { ALL_PRODUCTS_URL } from "@/constants/url";
import { ProductsLoader } from "../shared/loader";
import EmptyProductList from "../shared/empty-list";
import Product from "../shared/product";
import Error from "../shared/error";

const AllProducts = () => {
  const { data, isLoading, isError } = useQuery({
    queryFn: async() => await getData(ALL_PRODUCTS_URL),
    queryKey: ['all-products']
  })

  if (isLoading) {
    return (
      <div className="flex justify-center py-20 bg-[#fcfcfc]">
        <div className="w-[90%] lg:w-[80%]">
          <ProductsLoader />
        </div>
      </div>
    )
  }

  if (!isLoading && isError) {
    return (
      <Error />
    )
  }

  return (
    <div className="flex justify-center py-16 pt-2 bg-[#fcfcfc]">
      <div className="w-[90%] lg:w-[80%]">
        <h1 className="font-semibold text-2xl mb-4">All Products</h1>
        <Separator className="mb-8" />
        <>
          {!(data?.total_size) ? (
            <EmptyProductList title="Oops, Empty list!" subTitle="No products found" />
          ) : null}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {data?.products?.map((product: IProduct) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </>
      </div>
    </div>
  )
}

export default AllProducts;
