import { Skeleton } from "@/components/ui/skeleton";

const ProductsLoader = () => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).map((value) => (
        <div className="col-span-1 flex flex-col items-center group p-2 bg-white shadow-md rounded-md" key={value}>
          <div className="flex flex-col space-y-3 items-center">
            <Skeleton className="h-[230px] w-[300px] rounded-sm" />
            <div className="space-y-2 flex flex-col items-center">
              <Skeleton className="h-3 w-[80px]" />
              <Skeleton className="h-3 w-[80px]" />
              <Skeleton className="h-3 w-[150px]" />
              <Skeleton className="h-3 w-[80px]" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductsLoader;
