'use client';

import { useQuery } from "@tanstack/react-query";
import { IoIosArrowForward } from "react-icons/io";

import { getCategories } from "@/app/services/getCategories";
import { ICategory } from "@/app/types/Category";
import { categories } from "./test-data";
import { Skeleton } from "@/components/ui/skeleton";

const Categories = () => {
  const { data, isLoading } = useQuery({
    queryFn: async() => await getCategories('https://6valley.6amtech.com/api/v1/categories?guest_id=1'),
    queryKey: ['categories']
  })

  if (isLoading) {
    return (
      <div className="w-1/5 border border-t-0 bg-white flex flex-col gap-1">
        {Array.from([1, 2, 3, 4, 5, 6, 7, 8].map(value => (
          <Skeleton className="h-[55px] w-full" />
        )))}
      </div>
    )
  }

  return (
    <div className="w-1/5 border border-t-0 bg-white">
      <div className="max-h-[500px] overflow-y-auto">
        {data.map((category: ICategory, index: number) => (
          <button key={category.id} className={`flex w-full ${index == categories.length - 1 ? '' : 'border-b'} p-4 justify-between items-center hover:bg-gray-100 transition-all`}>
            <span>{category.name}</span>
            <IoIosArrowForward size={20} />
          </button>
        ))}
      </div>
    </div>
  )
}

export default Categories;
