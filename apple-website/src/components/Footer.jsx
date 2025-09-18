import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="px-5 py-5 sm:px-10">
      <div className="screen-max-width">
        <div>
          <p className="text-gray text-xs font-semibold">
            More ways to shop:{" "}
            <span className="cursor-pointer text-blue underline">
              Find an Apple Store
            </span>{" "}
            or{" "}
            <span className="cursor-pointer text-blue underline">
              other retailers
            </span>{" "}
            near you.
          </p>
          <p className="text-gray text-xs font-semibold">
            Or call +(1) 234-567-8900
          </p>
        </div>
        <div className="my-5 h-[1px] w-full bg-neutral-700" />
        <div className="flex flex-col justify-between md:flex-row md:items-center">
          <p className="text-gray text-xs font-semibold">
            Copyright &copy; 2024 Apple Inc. All rights reserved.
          </p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p
                key={link}
                className="text-gray cursor-pointer text-xs font-semibold"
              >
                {link}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2 cursor-none">|</span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
