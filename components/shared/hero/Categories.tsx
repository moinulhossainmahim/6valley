import { IoIosArrowForward } from "react-icons/io";
import { categories } from "./test-data";

const Categories = () => {
  return (
    <div className="w-1/5 border border-t-0 bg-white">
      {categories.map((category) => (
        <button key={category.id} className={`flex w-full ${category.id === categories.length ? '' : 'border-b'} p-4 justify-between items-center hover:bg-gray-100 transition-all`}>
          <span>{category.title}</span>
          <IoIosArrowForward size={20} />
        </button>
      ))}
    </div>
  )
}

export default Categories;
