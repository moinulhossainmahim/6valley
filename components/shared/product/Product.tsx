import Image from "next/image";

import { IProduct } from "@/app/types/Product";
import { isNewProduct } from "@/utils/isNewProduct";
import { Badge } from "@/components/ui/badge";
import { AiFillThunderbolt } from "react-icons/ai";
import Stars from "../stars";

interface ProductProps {
  product: IProduct;
};

const Product = ({ product } : ProductProps) => {
  return (
    <div className="col-span-1 flex flex-col items-center group p-2 bg-white shadow-md rounded-md">
      <div className="aspect-square w-full relative overflow-hidden mb-4">
        <Image  className="object-cover h-full w-full group-hover:scale-110 transition"
          src={`https://6valley.6amtech.com/storage/app/public/product/${product.images[0]}`}
          alt={product.name}
          height={100}
          width={100}
        />
        <div className="absolute top-0 left-0 flex flex-col gap-2">
          {isNewProduct(product.created_at) ? (
            <Badge>New</Badge>
          ) : null}
          {product?.discount ? (
            <Badge variant='destructive'>-{product.discount}%</Badge>
          ) : null}
        </div>
        {product.flash_deal_status ? (
          <div className="flush-deal-container">
            <div className="flush-deal-badge">
                <AiFillThunderbolt color="white" size={20}  className="flush-deal-icon" />
            </div>
          </div>
        ) : null}
      </div>
      <div className="flex items-center flex-col">
        <div className="flex">
          <Stars count={2} />
          <p className="text-[#9B9B9B]">(10)</p>
        </div>
        {/* <p className="text-[#9B9B9B] text-sm">{product.category.name}</p> */}
        <h4 className="font-semibold">{product.name.length > 20 ? `${product.name.substring(0, 20)}...` : product.name}</h4>
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
