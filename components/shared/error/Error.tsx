import { MdError } from "react-icons/md";

interface ErrorProps {
  title?: string;
  subTitle?: string;
};

const Error = ({ title = 'Something Went Wrong!', subTitle = 'Try again later' } : ErrorProps) => {
  return (
    <div className="flex flex-col items-center gap-2 w-full">
      <MdError size={30} color="red" />
      <h1 className="font-bold text-lg">{title}</h1>
      <p>{subTitle}</p>
    </div>
  )
}

export default Error;
