import Image from "next/image";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { IoLogoFacebook } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { FaYoutube, FaApple } from "react-icons/fa6";

const FooterBottom = () => {
  return (
    <div>
       <div className="relative w-full bg-cover bg-center bg-[url('/assets/footer-bg.png')]">
        <div className="absolute inset-0 bg-[#171C2E] opacity-[0.92]"></div>
        <div className="relative flex h-full flex-col">
          <div className="bg-[#193a67] opacity-[.7] h-[80px] w-full flex justify-between items-center px-2 lg:px-24">
            <span></span>
            <div>
              <ul className="flex gap-6">
                <li className="cursor-pointer">
                  <AiFillTwitterCircle color="white" size={25} />
                </li>

                <li className="cursor-pointer">
                  <AiFillInstagram color="white" size={25} />
                </li>

                <li className="cursor-pointer">
                  <IoLogoFacebook color="white" size={25} />
                </li>

                <li className="cursor-pointer">
                  <FaYoutube color="white" size={25} />
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <FiPhoneCall size={25} color="white" />
              <div className="text-white">
                <h4 className="font-semibold text-lg">Hotline</h4>
                <p className="text-sm">+90-327-5345543</p>
              </div>
            </div>
          </div>
          <div className="h-[80%] flex justify-between px-20 py-8 opacity-[0.8] flex-wrap">
            <div className="flex flex-col w-[300px] gap-4">
              <div className="flex gap-2 items-center w-[25%] text-white">
                <Image src='/assets/logo.png' style={{ height: '40px', width: '30px' }} height={100} width={100} alt="6valley-logo" />
                <h4 className="font-bold text-xl">6valley</h4>
              </div>
              <p className="text-gray-300 text-sm">Suspendisse ultrices at diam lectus nullam.
              Nisl, sagittis viverra enim erat tortor ultricies </p>
              <div className="pl-2">
                <p className="text-sm text-gray-300">1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
                <p className="text-gray-300 text-sm">support@example.com</p>
              </div>
              <div className="flex gap-2">
                <div className="bg-black flex gap-1 items-center p-2">
                  <Image src='/assets/store.png' style={{ height: '30px', width: '30px' }} height={100} width={100} alt="playstore-logo" />
                  <div>
                    <h6 className="font-semibold text-gray-300">GET IT ON</h6>
                    <h6 className="font-bold text-white">Google Play</h6>
                  </div>
                </div>
                <div className="bg-black flex gap-1 items-center p-2">
                  <FaApple size={25} color="white" />
                  <div>
                    <h6 className="font-semibold text-gray-300">GET IT ON</h6>
                    <h6 className="font-bold text-white">Google Play</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[300px] gap-4">
              <h6 className="text-white font-semibold">Accounts</h6>
              <ul className="flex flex-col gap-4">
                <li className="text-sm text-gray-300 cursor-pointer inline-block">Become a Delivery Man</li>
                <li className="text-sm text-gray-300 cursor-pointer">Open Your Store</li>
                <li className="text-sm text-gray-300 cursor-pointer">Profile</li>
                <li className="text-sm text-gray-300 cursor-pointer">Help & Support</li>
              </ul>
            </div>
            <div className="flex flex-col w-[300px] gap-4">
              <h6 className="text-white font-semibold">Quick Links</h6>
              <ul className="flex flex-col gap-4">
                <li className="text-sm text-gray-300 cursor-pointer inline-block">Flash Deals</li>
                <li className="text-sm text-gray-300 cursor-pointer">Featured Products</li>
                <li className="text-sm text-gray-300 cursor-pointer">Top Stores</li>
                <li className="text-sm text-gray-300 cursor-pointer">New Arrivals</li>
              </ul>
            </div>
            <div className="flex flex-col w-[300px] gap-4">
              <h6 className="text-white font-semibold">Other</h6>
              <ul className="flex flex-col gap-4">
                <li className="text-sm text-gray-300 cursor-pointer inline-block">Privacy Policy</li>
                <li className="text-sm text-gray-300 cursor-pointer">Term & Conditions</li>
                <li className="text-sm text-gray-300 cursor-pointer">Refund Policy</li>
                <li className="text-sm text-gray-300 cursor-pointer">Support Ticket</li>
              </ul>
            </div>
          </div>
          <div className="h-[70px] bg-[#193a67] flex justify-center items-center opacity-[0.7]">
            <h5 className="text-white text-sm">{new Date().getFullYear()} COPYRIGHT All Rights Reserved By 6amMart.com</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterBottom;
