import Link from "next/link";

export default function NavButton({ children, href }) {
  return (
    <>
      <li className=" hover:bg-blue-100 border-b-2 border-b-transparent hover:border-b-blue-700 h-full py-4 px-2">
        <Link href={href}>{children}</Link>
      </li>
    </>
  );
}
