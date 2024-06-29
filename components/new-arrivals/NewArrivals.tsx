'use client';

import { useQuery } from "@tanstack/react-query";

import { getProducts } from "@/app/services/getProducts";
import { IProduct } from "@/app/types";
import { NEW_ARRIVAL_PRODUCTS_URL } from "@/constants/url";
import { ProductsLoader } from "../shared/loader";
import EmptyProductList from "../shared/empty-list";
import Product from "../shared/product";
import Error from "../shared/error";

const NewArrivals = () => {
  const { data, isLoading, isError } = useQuery({
    queryFn: async() => await getProducts(NEW_ARRIVAL_PRODUCTS_URL),
    queryKey: ['new-arrivals']
  })

  if (isLoading) {
    return (
      <ProductsLoader />
    )
  }

  if (!isLoading && isError) {
    return (
      <Error />
    )
  }

  return (
    <>
      {!(data?.total_size) ? (
        <EmptyProductList title="Oops, Empty list!" subTitle="No New Arrivals products found" />
      ) : null}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {data?.products?.map((product: IProduct) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}

export default NewArrivals;
