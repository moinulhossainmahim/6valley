'use client';

import { useQuery } from "@tanstack/react-query";

import { Separator } from "@/components/ui/separator";
import { getProducts } from "@/app/services/getProducts";
import { IProduct } from "@/app/types";
import { ProductsLoader } from "../loader";
import EmptyProductList from "../empty-list";
import Product from "../product";

const AllProducts = () => {
  const { data, isLoading } = useQuery({
    queryFn: async() => await getProducts('https://6valley.6amtech.com/api/v1/products/featured?guest_id=1&limit=20&&offset=1'),
    queryKey: ['all-products']
  })

  const { data: categories, isLoading: isCategoryLoading } = useQuery({
    queryFn: async() => await getProducts('https://6valley.6amtech.com/api/v1/products/categories?guest_id=1&limit=10&&offset=1'),
    queryKey: ['categories']
  })

  if (isLoading || isCategoryLoading) {
    return (
      <div className="flex justify-center py-20 bg-[#fcfcfc]">
        <div className="w-[90%] lg:w-[80%]">
          <ProductsLoader />
        </div>
      </div>
    )
  }

  return (
    <div className="flex justify-center py-20 bg-[#fcfcfc]">
      <div className="w-[90%] lg:w-[80%]">
        <h1 className="font-bold text-lg mb-4">All Products</h1>
        <Separator className="mb-4" />
        <>
          {!(data.total_size) ? (
            <EmptyProductList title="Oops, Empty list!" subTitle="No featured products found" />
          ) : null}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {data.products?.map((product: IProduct) => (
              <Product key={product.id} product={product} categories={categories} />
            ))}
          </div>
        </>
      </div>
    </div>
  )
}

export default AllProducts;
