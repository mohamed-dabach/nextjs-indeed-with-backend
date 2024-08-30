import Link from "next/link";

export default function LinkWhiteBg({ children, href, ...props }) {
 
  return (
    <Link 
      href={href}
      className=" px-3 py-2 h-fit w-fit flex justify-center items-center font-bold text-blue-800 border-[1px] border-gray-400 rounded-lg hover:border-blue-800 hover:bg-blue-50"
      {...props}
    >
      {children}


    </Link>
  );

}
 