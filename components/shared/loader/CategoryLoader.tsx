import { Skeleton } from "@/components/ui/skeleton"

const CategoryLoader = () => {
  return (
    <div className="w-1/5 border border-t-0 bg-white flex-col gap-1 hidden lg:flex">
      {Array.from([1, 2, 3, 4, 5, 6, 7, 8].map(value => (
        <Skeleton className="h-[55px] w-full" key={value} />
      )))}
    </div>
  )
}

export default CategoryLoader;
