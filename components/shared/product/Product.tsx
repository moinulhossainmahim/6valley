import Image from "next/image";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { LuGitCompare } from "react-icons/lu";
import { MdOutlineWifi2Bar } from "react-icons/md";
import { PiShoppingBagFill } from "react-icons/pi";

import { IProduct, ICategory } from "@/app/types";
import { isNewProduct } from "@/utils/isNewProduct";
import { Badge } from "@/components/ui/badge";
import { PRODUCT_IMAGE_URL } from "@/constants/url";
import Stars from "../stars";

interface ProductProps {
  product: IProduct;
  categories: ICategory[];
};

const Product = ({ product, categories } : ProductProps) => {
  return (
    <div className="col-span-1 flex flex-col items-center group p-2 bg-white shadow-md rounded-md">
      <div className="aspect-square w-full relative overflow-hidden mb-4">
        <Image  className="object-cover h-full w-full group-hover:hidden transition-[display]"
          src={`${PRODUCT_IMAGE_URL}/${product.images[0]}`}
          alt={product.name}
          height={100}
          width={100}
        />
        <div className="absolute top-0 left-0 flex flex-col gap-2 group-hover:z-10">
          {isNewProduct(product.created_at) ? (
            <Badge>New</Badge>
          ) : null}
          {product?.discount ? (
            <Badge variant='destructive'>-{product.discount}%</Badge>
          ) : null}
        </div>
        {product.flash_deal_status ? (
          <div className="absolute top-[-109px] right-[-109px] rotate-[45deg] bg-[#1b7fed] group-hover:z-10">
            <div className="relative top-[5px] right-[-41px] w-[180px] h-[145px] text-white">
                <AiFillThunderbolt color="white" size={20}  className="absolute left-[55px] top-[116px] rotate-[-45deg]" />
            </div>
          </div>
        ) : null}
         <div className="absolute inset-0 bg-[#DEDEDE] bg-opacity-60 flex justify-end items-center opacity-0 group-hover:opacity-100 transition-all duration-500 w-full pr-4">
          <div className="flex gap-4 flex-col">
            <button className="bg-white hover:bg-gray-300 transition-all p-2 rounded-full border border-[#1B7FED]">
              <PiShoppingBagFill className="hover:text-white transition-all" color="#1B7FED" />
            </button>
            <button className="bg-white hover:bg-gray-300 transition-all  p-2 rounded-full border border-[#1B7FED]">
              <FaRegHeart className="hover:text-white transition-all" color="#1B7FED" />
            </button>
            <button className="bg-white hover:bg-gray-300 transition-all p-2 rounded-full border border-[#1B7FED]">
              <LuGitCompare className="hover:text-white transition-all" color="#1B7FED" />
            </button>
            <button className="bg-white hover:bg-gray-300 transition-all p-2 rounded-full border border-[#1B7FED]">
              <MdOutlineWifi2Bar className="hover:text-white transition-all" color="#1B7FED" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-col">
        <div className="flex items-center">
          <Stars count={Number(product.reviews_avg_rating ? product.reviews_avg_rating : 0)} />
          <p className="text-[#9B9B9B]">({product.reviews_count ? product.reviews_count : 0})</p>
        </div>
        <p className="text-[#9B9B9B] text-sm">{product?.seller?.shop?.name}</p>
        <h4 className="font-semibold">{product?.name?.length > 20 ? `${product?.name?.substring(0, 20)}...` : product?.name}</h4>
        <div className="flex gap-1">
          {product.discount ? (
            <span className="line-through text-[#9B9B9B]">{product.unit_price}$</span>
          ) : null}
          <span>{product.purchase_price}$</span>
        </div>
      </div>
    </div>
  )
}

export default Product;
