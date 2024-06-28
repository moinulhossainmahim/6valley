import { FaStar, FaRegStar } from "react-icons/fa";
import { TbStarHalfFilled } from "react-icons/tb";

export default function Stars({ count } : { count: number }) {
  const totalStars = 5;
  const fullStars = Math.floor(count);
  const halfStar = count % 1 >= 0.5;
  const emptyStars = totalStars - fullStars - (halfStar ? 1 : 0);

  return (
    <ul className="flex justify-center">
      <div className="flex">
        {Array.from({ length: fullStars }, (_, index) => (
          <Star key={`full-${index}`} filled />
        ))}
          {halfStar && <Star half />}
          {Array.from({ length: emptyStars }, (_, index) => (
            <Star key={`empty-${index}`} />
          ))}
        </div>
    </ul>
  );
}

const Star = ({ filled, half } : { filled?: boolean, half?: boolean }) => {
  if (filled) {
    return <span className="text-yellow-500">
      <FaStar />
    </span>;
  } else if (half) {
    return <span className="text-yellow-500">
      <TbStarHalfFilled />
    </span>;
  } else {
    return <span className="text-gray-400">
      <FaRegStar />
    </span>;
  }
};
