import { Skeleton } from "@/components/ui/skeleton";

const SkeletonLoader = () => {
  return (
    <div className="flex flex-col space-y-3 items-center">
      <Skeleton className="h-[180px] w-[230px] rounded-sm" />
      <div className="space-y-2 flex flex-col items-center">
        <Skeleton className="h-3 w-[80px]" />
        <Skeleton className="h-3 w-[80px]" />
        <Skeleton className="h-3 w-[150px]" />
        <Skeleton className="h-3 w-[80px]" />
      </div>
    </div>
  )
}

export default SkeletonLoader;
