import FooterItemLink from "./footerItemLink";

export default function Footer() {
  return (
    <div className="border-t-2 border-t-[rgb(243,242,241)] ">
      <div className="px-4 m-auto py-6">
        <ul className="flex flex-col items-start  sm:flex-row sm:flex-wrap sm:gap-5 gap-1 mb-5">
          <FooterItemLink href="#">Browse jobs</FooterItemLink>

          <FooterItemLink href="#">Browse Companies</FooterItemLink>
          <FooterItemLink href="#">Countries</FooterItemLink>
          <FooterItemLink href="#">About</FooterItemLink>
          <FooterItemLink href="#">Help Center</FooterItemLink>
          <FooterItemLink href="#">ESG at Indeed</FooterItemLink>
        </ul>
        <ul className="flex flex-col items-start  sm:flex-row sm:flex-wrap sm:gap-5 gap-1 mb-4">
          <li>
            <p className="text-sm">© 2024 Indeed</p>
          </li>
          <FooterItemLink href="#">Accessibility at Indeed</FooterItemLink>
          <FooterItemLink href="#">
            Privacy Center and Ad Choices
          </FooterItemLink>
          <FooterItemLink href="#">Terms</FooterItemLink>
        </ul>
      </div>
    </div>
  );
}
