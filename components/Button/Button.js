import Link from "next/link";
import { AiOutlineFileSearch } from "react-icons/ai";
import { BsFilePlayFill } from "react-icons/bs";

export const Button = () => {
  return (
    <Link href="#">
      <a
        className="flex items-center bg-btnColor hover:bg-btnHoverColor transition-all duration-200 font-montserrat text-white rounded-md py-2 px-4"
        target="_blank"
      >
        <AiOutlineFileSearch size={20} className="inline-block mr-2" /> Get
        30-day Free Trail
      </a>
    </Link>
  );
};

export const ButtonPlatform = () => {
  return (
    <Link href="#">
      <a
        className="flex items-center bg-transparent hover:bg-btnHoverColor hover:border-transparent transition-all duration-200 border border-white font-montserrat text-white rounded-md py-2 px-4"
        target="_blank"
      >
        <BsFilePlayFill
          size={20}
          className="inline-block mr-2 bg-transparent"
        />
        Explore platform
      </a>
    </Link>
  );
};
