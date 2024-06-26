import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { TbArrowsShuffle2 } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";

const HeaderTop = () => {
  return (
    <div className="flex items-center px-32 py-2 justify-between w-full border-b border">
      <div className="flex gap-2 items-center w-[25%]">
        <Image src='/assets/logo.png' style={{ height: '40px', width: '30px' }} height={100} width={100} alt="6valley-logo" />
        <h4 className="font-bold text-xl">6valley</h4>
      </div>
      <div className="py-[2px] pl-6 pr-1 flex items-center gap-4 border border-[rgba(222, 222, 222, 1)] rounded-full w-[40%]">
        <button className="flex gap-2">
          <AiOutlineMenu />
          <div>
            <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
            </svg>
          </div>
        </button>
        <div className="border-r border-gray-300 h-[35px]"></div>
        <input
          type="text"
          placeholder="Search for items or store..."
          className="flex-grow p-2 outline-none"
        />
        <Button className="rounded-e-full bg-[#1B7FED]">
          <IoSearchOutline size={20} />
        </Button>
      </div>
      <div className="w-[25%] flex gap-4 items-center justify-center py-4">
        <button>
          <FaUserCircle className="text-[#A1B1C2]" size={25} />
        </button>
        <div className="border-r border-gray-300 h-[30px]"></div>
        <button className="relative">
          <TbArrowsShuffle2 className="text-[#A1B1C2]" size={25} />
          <span className="absolute top-[-4px] right-[-2px] bg-[#1B7FED] rounded-full w-4 h-4 flex justify-center items-center text-xs text-white">6</span>
        </button>
        <div className="border-r border-gray-300 h-[30px]"></div>
        <button className="relative">
          <CiHeart className="text-[#A1B1C2]" size={25} />
          <span className="absolute top-[-4px] right-[-2px] bg-[#1B7FED] rounded-full w-4 h-4 flex justify-center items-center text-xs text-white">6</span>
        </button>
        <div className="border-r border-gray-300 h-[30px]"></div>
        <button className="relative">
          <FiShoppingBag className="text-[#A1B1C2]" size={25} />
          <span className="absolute top-[-4px] right-[-2px] bg-[#1B7FED] rounded-full w-4 h-4 flex justify-center items-center text-xs text-white">6</span>
        </button>
      </div>
    </div>
  )
}

export default HeaderTop;
