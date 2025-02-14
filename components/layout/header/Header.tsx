'use client'

import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaTwitter, FaFacebookSquare, FaInstagram } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import HeaderTop from "./headertop";
import HeaderBottom from "./headerbottom";

const Header = () => {
  const [isOpenCategory, setIsOpenCategory] = useState(false);

  const toggleCategory = () => {
    setIsOpenCategory((prev) => !prev);
  }

  return (
    <header>
      <div className="bg-[#0D1D35] text-white py-2 px-2 2xl:px-[10%] flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <Button className="rounded-full bg-[#1B7FED] hover:bg-[#1b80edd5]" size='sm'>Become a Seller</Button>
          <p className="hidden md:block">Free Express Shipping</p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="relative inline-block text-white">
            <select className="text-white appearance-none pl-2 pr-8 py-2 bg-[#0D1D35]">
              <option>USD</option>
              <option>BD</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <MdKeyboardArrowDown />
            </div>
          </div>
          <div className="relative inline-block text-white">
            <select className="text-white appearance-none pl-2 pr-8 py-2 bg-[#0D1D35]">
              <option>EN</option>
              <option>BN</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <MdKeyboardArrowDown />
            </div>
          </div>
          <ul className="gap-6 hidden md:flex">
            <li className="cursor-pointer">
              <FaTwitter className="hover:text-gray-200" />
            </li>
            <li className="cursor-pointer">
              <FaFacebookSquare className="hover:text-gray-200" />
            </li>
            <li className="cursor-pointer">
              <FaInstagram className="hover:text-gray-200" />
            </li>
          </ul>
        </div>
      </div>
      <HeaderTop />
      <HeaderBottom toggleCategory={toggleCategory} isOpen={isOpenCategory} />
    </header>
  )
}

export default Header;
