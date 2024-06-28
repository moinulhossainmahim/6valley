import { AiOutlineMenu } from "react-icons/ai";
import { CiDiscount1 } from "react-icons/ci";

const HeaderBottom = () => {
  return (
    <div className="flex items-center px-[10%] gap-32 w-full h-[65px] border border-b">
      <button className="flex gap-4 bg-[#1B7FED] items-center h-full px-4 text-white w-[20%] hover:bg-[#1b80edf7] transition-all">
        <AiOutlineMenu />
        <h5>Browse Category</h5>
        <div>
          <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
          </svg>
        </div>
      </button>
      <div>
        <ul className="flex gap-4 items-center">
          <li>Home</li>
          <li className="relative">
            <select className="pl-2 pr-2 py-2">
              <option>Offers</option>
            </select>
          </li>
          <li className="relative">
            <select className="pl-2 pr-2 py-2">
              <option>Stores</option>
            </select>
          </li>
          <li className="relative">
            <select className="pl-2 pr-2 py-2">
              <option>Brands</option>
            </select>
          </li>
          <li className="flex items-center gap-2">
            <p>
              Discounted Products
            </p>
            <CiDiscount1 size={20} color="#FFBE00" />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HeaderBottom;
