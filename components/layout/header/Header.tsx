import { Button } from "@/components/ui/button";
import { FaTwitter, FaFacebookSquare, FaInstagram } from "react-icons/fa";
import HeaderTop from "./headertop";
import HeaderBottom from "./headerbottom";

const Header = () => {
  return (
    <header>
      <div className="bg-[#0D1D35] text-white py-2 px-16 flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <Button className="rounded-full bg-[#1B7FED]" size='sm'>Become a Seller</Button>
          <p>Free Express Shipping</p>
        </div>
        <div className="flex gap-6 items-center">
          <div className="relative inline-block text-white">
            <select className="text-white appearance-none pl-2 pr-8 py-2 bg-[#0D1D35]">
              <option>USD</option>
              <option>BD</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
              </svg>
            </div>
          </div>
          <div className="relative inline-block text-white">
            <select className="text-white appearance-none pl-2 pr-8 py-2 bg-[#0D1D35]">
              <option>EN</option>
              <option>BN</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
              </svg>
            </div>
          </div>
          <div>
            <FaTwitter />
          </div>
          <div>
            <FaFacebookSquare />
          </div>
          <div>
            <FaInstagram />
          </div>
        </div>
      </div>
      <HeaderTop />
      <HeaderBottom />
    </header>
  )
}

export default Header;
