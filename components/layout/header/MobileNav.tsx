import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import { CiHeart } from "react-icons/ci";
import { FaFacebookSquare, FaUserCircle } from "react-icons/fa";
import { FaTwitter, FaInstagram } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import { TbArrowsShuffle2 } from "react-icons/tb";

const MobileNav = () => {
  return (
    <div className="ml-5 block md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            src="/assets/menu.svg"
            alt="menu"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white lg:hidden">
          <Image
            src="/assets/logo.png"
            alt="logo"
            style={{ width: '30px' }}
            width={128}
            height={50}
          />
          <Separator className="border border-gray-200" />
          <div>
            <ul className="flex gap-4 flex-col">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Categories</SelectLabel>
                    <SelectItem value="Men's Cloth">Men's Cloth</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
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
              <li className="pl-3 cursor-pointer hover:text-gray-700 text-sm lg:text-base relative">Sign In</li>
              <li className="pl-3 cursor-pointer hover:text-gray-700 text-sm lg:text-base relative">Sign Out</li>
            </ul>
            <div className="flex mt-4 gap-8 items-center justify-center py-4">
              <button className="relative">
                <TbArrowsShuffle2 className="text-[#A1B1C2] hover:text-gray-800 transition-colors" size={25} />
                <span className="absolute top-[-4px] right-[-2px] bg-[#1B7FED] rounded-full w-4 h-4 flex justify-center items-center text-xs text-white">6</span>
              </button>
              <button className="relative">
                <CiHeart className="text-[#A1B1C2] hover:text-gray-800 transition-colors" size={25} />
                <span className="absolute top-[-4px] right-[-2px] bg-[#1B7FED] rounded-full w-4 h-4 flex justify-center items-center text-xs text-white">6</span>
              </button>
              <button className="relative">
                <FiShoppingBag className="text-[#A1B1C2] hover:text-gray-800 transition-colors" size={25} />
                <span className="absolute top-[-4px] right-[-2px] bg-[#1B7FED] rounded-full w-4 h-4 flex justify-center items-center text-xs text-white">6</span>
              </button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNav;
