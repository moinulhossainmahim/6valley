'use client';

import { AiFillAndroid } from "react-icons/ai";
import { BiDollarCircle, BiWallet } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
import { LiaShippingFastSolid } from "react-icons/lia";
import { SlEarphonesAlt, SlGlobe } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const FooterTop = () => {
  return (
    <div className="bg-[#F2F3F4] flex gap-2 flex-col px-[10%] py-16">
      <div className="flex gap-4">
        <div className="flex flex-col gap-3 w-[250px] items-center justify-center">
          <BiDollarCircle size={25} />
          <h1 className="font-semibold text-lg">Great Value</h1>
          <p className="text-xs text-center">We offer competitive prices on over 100 million items.</p>
        </div>
        <div className="border-r border-gray-300 h-[160px]"></div>

        <div className="flex flex-col gap-3 w-[250px] items-center justify-center">
          <LiaShippingFastSolid size={25} />
          <h1 className="font-semibold text-lg">Whole Country Shipping</h1>
          <p className="text-xs text-center">We ship all over the country at any time, anywhere </p>
        </div>
        <div className="border-r border-gray-300 h-[160px]"></div>

        <div className="flex flex-col gap-3 w-[250px] items-center justify-center">
          <BiWallet size={25} />
          <h1 className="font-semibold text-lg">Safe Payment</h1>
          <p className="text-xs text-center">Pay with secure payment methods.</p>
        </div>
        <div className="border-r border-gray-300 h-[160px]"></div>

        <div className="flex flex-col gap-3 w-[250px] items-center justify-center">
          <SlEarphonesAlt size={25} />
          <h1 className="font-semibold text-lg">24/7 Support</h1>
          <p className="text-xs text-center">Pay with secure payment methods.</p>
        </div>
        <div className="border-r border-gray-300 h-[160px]"></div>

        <div className="flex flex-col gap-3 w-[250px] items-center justify-center">
          <SlGlobe size={25} />
          <h1 className="font-semibold text-lg">Multiple Language</h1>
          <p className="text-xs text-center">Our comes in with multiple languages..</p>
        </div>
        <div className="border-r border-gray-300 h-[160px]"></div>

        <div className="flex flex-col gap-3 w-[250px] items-center justify-center">
          <div className="flex gap-1 items-center">
            <AiFillAndroid size={25} />
            <FaApple size={25} />
          </div>
          <h1 className="font-semibold text-lg">Shop Better</h1>
          <p className="text-xs text-center">Download our app from play store and app store</p>
        </div>
      </div>
      <div className="bg-[#09336F] items-center px-20 text-white flex w-full justify-between py-6 rounded-xl">
        <div className="w-1/2">
          <h1 className="mb-2">Newsletter</h1>
          <p className="text-sm">Be the first one to know  about discounts, offers and events</p>
        </div>
        <div className="w-1/2">
          <form className="flex gap-2 justify-end w-[500px]">
            <div className="relative w-[70%] bg-white py-2 rounded-lg">
            <input type="email" className="text-gray pl-10 pr-4 py-2 border rounded-lg border-none focus:text-gray-600 focus:outline-none" placeholder="Enter your email" />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <CiMail size={20} color="gray" />
              </div>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <Button className="bg-[#1B7FED] hover:bg-[#1b9ced] text-white cursor-pointer" onClick={(e) => e.stopPropagation()}>Submit</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FooterTop;
