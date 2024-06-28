import { ICategory } from "@/app/types/Category";

export const getCategory = (categories: ICategory[], id: number) => {
  const category = categories.find((category) => category.id === id);
  return category;
};
