export default function SectionItem({ children, ...props }) {
  return (
    <div
      {...props}
      className="pb-4 flex justify-between text-sm py-4 border-b-[1px] border-gray-300"
    >
      {children}
    </div>
  );
}
