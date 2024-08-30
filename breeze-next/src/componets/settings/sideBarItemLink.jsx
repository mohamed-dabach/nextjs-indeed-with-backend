import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export default function SideBarItemLink({
  children,
  to,
  currentPath,
  ...props
}) {
  return (
    <li className="">
      <Link
        href={to}
        className={`grid grid-cols-[25px_1fr_25px] gap-3 items-center ps-4 py-4 pr-4 m-0 border-b-2 border-b-transparent md:hover:border-b-blue-600 ${
          currentPath === to
            ? "md:border-l-blue-600 md:border-l-[6px] bg-white"
            : ""
        }`}
        {...props}
      >
        {children}

        <IoIosArrowForward className="w-5 h-5" />
      </Link>
    </li>
  );
}
