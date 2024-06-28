import { getCategories } from "@/app/services/getCategories";
import { ICategory } from "@/app/types";
import { useQuery } from "@tanstack/react-query";
import { AiOutlineMenu } from "react-icons/ai";
import { CiDiscount1 } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

interface HeaderBottomProps {
  toggleCategory: () => void;
  isOpen: boolean;
};

const HeaderBottom = ({ toggleCategory, isOpen } : HeaderBottomProps) => {
  const { data, isLoading } = useQuery({
    queryFn: async() => await getCategories('https://6valley.6amtech.com/api/v1/categories?guest_id=1'),
    queryKey: ['categories']
  })

  return (
    <div className="hidden md:flex items-center px-2 2xl:px-[10%] gap-16 lg:gap-32 w-full h-[65px] border border-b relative">
      <button className="flex gap-4 bg-[#1B7FED] items-center h-full px-2 text-white w-fit lg:w-[20%] hover:bg-[#1b80edf7] transition-all justify-center" onClick={toggleCategory}>
        <AiOutlineMenu />
        <h5 className="text-xs lg:text-base">Browse Category</h5>
        <div>
          <MdKeyboardArrowDown />
        </div>
      </button>
      <div>
        <ul className="flex gap-4 items-center">
          <li className="cursor-pointer hover:text-gray-700 text-sm lg:text-base">Home</li>
          <li className="cursor-pointer hover:text-gray-700 text-sm lg:text-base relative">
            <select className="pl-2 pr-2 py-2">
              <option>Offers</option>
            </select>
          </li>
          <li className="cursor-pointer hover:text-gray-700 text-sm lg:text-base relative">
            <select className="pl-2 pr-2 py-2">
              <option>Stores</option>
            </select>
          </li>
          <li className="cursor-pointer hover:text-gray-700 text-sm lg:text-base relative">
            <select className="pl-2 pr-2 py-2">
              <option>Brands</option>
            </select>
          </li>
          <li className="cursor-pointer hover:text-gray-700 text-sm lg:text-base flex items-center gap-2">
            <p>
              Discounted Products
            </p>
            <CiDiscount1 size={20} color="#FFBE00" />
          </li>
        </ul>
      </div>
      {isOpen && !isLoading? (
        <div className="w-[300px] border border-t-0 bg-white z-10 absolute lg:hidden block shadow-md bg-card overflow-hidden left-1 top-20 text-sm">
          <div className="max-h-[370px] overflow-y-auto">
            {data?.map((category: ICategory, index: number) => (
              <button key={category.id} className={`flex w-full ${index == data.length - 1 ? '' : 'border-b'} p-4 justify-between items-center hover:bg-gray-100 transition-all`}>
                <span className="text-sm 2xl:text-base">{category.name}</span>
                <IoIosArrowForward size={20} />
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default HeaderBottom;
