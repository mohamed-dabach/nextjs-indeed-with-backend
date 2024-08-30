import Link from "next/link";

export default function OldBlueLink({ children, href }) {
  return (
    <Link href={href} className="text-blue-800 underline">
      {children}{" "}
    </Link>
  );
}
