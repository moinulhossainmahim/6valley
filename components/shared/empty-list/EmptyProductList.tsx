import { FaBoxOpen } from "react-icons/fa";

interface EmptyProductListProps {
  title: string;
  subTitle: string;
};

const EmptyProductList = ({ title, subTitle } : EmptyProductListProps) => {
  return (
    <div className="flex flex-col items-center gap-2 w-full">
      <FaBoxOpen size={30} color="green" />
      <h1 className="font-bold text-lg">{title}</h1>
      <p>{subTitle}</p>
    </div>
  )
}

export default EmptyProductList;
