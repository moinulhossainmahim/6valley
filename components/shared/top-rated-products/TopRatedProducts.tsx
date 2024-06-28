'use client';

import { useQuery } from "@tanstack/react-query";

import { getProducts } from "@/app/services/getProducts";
import { IProduct } from "@/app/types/Product";
import { ProductsLoader } from "../loader";
import Product from "../product";
import EmptyProductList from "../empty-list/EmptyProductList";

const FeaturedProducts = () => {
  const { data, isLoading } = useQuery({
    queryFn: async() => await getProducts('https://6valley.6amtech.com/api/v1/products/top-rated?guest_id=1&limit=10&&offset=1'),
    queryKey: ['top-rated']
  })

  if (isLoading) {
    return (
      <ProductsLoader />
    )
  }

  return (
    <>
      {!(data.total_size) ? (
        <EmptyProductList title="Oops, Empty list!" subTitle="No featured products found" />
      ) : null}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {data.products?.map((product: IProduct) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}

export default FeaturedProducts;
