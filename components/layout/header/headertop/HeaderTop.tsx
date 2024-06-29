import { AiOutlineMenu } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { TbArrowsShuffle2 } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";

import { Button } from "@/components/ui/button";
import MobileNav from "../MobileNav";
import Logo from "../Logo";

const HeaderTop = () => {
  return (
    <div className="flex items-center px-2 2xl:px-[10%] py-4 justify-between w-full border-b border">
      <Logo />
      <div className="py-[3px] pl-6 pr-[3px] hidden lg:flex items-center gap-4 border border-[rgba(222, 222, 222, 1)] rounded-full w-[38%]">
        <button className="flex gap-2">
          <AiOutlineMenu />
          <div>
            <MdKeyboardArrowDown />
          </div>
        </button>
        <div className="border-r border-gray-300 h-[35px]"></div>
        <input
          type="text"
          placeholder="Search for items or store..."
          className="flex-grow p-2 outline-none"
        />
        <Button className="rounded-e-full bg-[#1B7FED] hover:bg-[#1b80edd5] w-[10%]">
          <IoSearchOutline size={20} />
        </Button>
      </div>
      <div className="hidden md:flex gap-4 items-center justify-center py-4">
        <button>
          <FaUserCircle className="text-[#A1B1C2] hover:text-gray-800 transition-colors" size={30} />
        </button>
        <div className="border-r border-gray-300 h-[30px]"></div>
        <button className="relative">
          <TbArrowsShuffle2 className="text-[#A1B1C2] hover:text-gray-800 transition-colors" size={25} />
          <span className="absolute top-[-4px] right-[-2px] bg-[#1B7FED] rounded-full w-4 h-4 flex justify-center items-center text-xs text-white">6</span>
        </button>
        <div className="border-r border-gray-300 h-[30px]"></div>
        <button className="relative">
          <CiHeart className="text-[#A1B1C2] hover:text-gray-800 transition-colors" size={25} />
          <span className="absolute top-[-4px] right-[-2px] bg-[#1B7FED] rounded-full w-4 h-4 flex justify-center items-center text-xs text-white">6</span>
        </button>
        <div className="border-r border-gray-300 h-[30px]"></div>
        <button className="relative">
          <FiShoppingBag className="text-[#A1B1C2] hover:text-gray-800 transition-colors" size={25} />
          <span className="absolute top-[-4px] right-[-2px] bg-[#1B7FED] rounded-full w-4 h-4 flex justify-center items-center text-xs text-white">6</span>
        </button>
      </div>

      <MobileNav />
    </div>
  )
}

export default HeaderTop;
