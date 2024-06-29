'use client';

import { useQuery } from "@tanstack/react-query";

import { getProducts } from "@/app/services/getProducts";
import { IProduct } from "@/app/types";
import { CATEGORIES_URL, TOP_RATED_PRODUCTS_URL } from "@/constants/url";
import { ProductsLoader } from "../shared/loader";
import Product from "../shared/product";
import EmptyProductList from "../shared/empty-list";
import Error from "../shared/error";

const FeaturedProducts = () => {
  const { data, isLoading, isError } = useQuery({
    queryFn: async() => await getProducts(TOP_RATED_PRODUCTS_URL),
    queryKey: ['top-rated']
  })

  const { data: categories, isLoading: isCategoryLoading, isError: isCategoryError } = useQuery({
    queryFn: async() => await getProducts(CATEGORIES_URL),
    queryKey: ['categories']
  })

  if (isLoading || isCategoryLoading) {
    return (
      <ProductsLoader />
    )
  }

  if (isError || isCategoryError) {
    return (
      <Error />
    )
  }

  return (
    <>
      {!(data?.total_size) ? (
        <EmptyProductList title="Oops, Empty list!" subTitle="No top rated products found" />
      ) : null}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {data?.products?.map((product: IProduct) => (
          <Product key={product.id} product={product} categories={categories} />
        ))}
      </div>
    </>
  )
}

export default FeaturedProducts;
