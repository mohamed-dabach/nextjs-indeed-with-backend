import Link from "next/link";

export default function FooterItemLink({ children, href }) {
  return (
    <>
      <li>
        <Link className="hover:underline text-sm" href={href}>
          {children}
        </Link>
      </li>
    </>
  );
}
