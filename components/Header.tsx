import Link from "next/link";
import { ThemeModeToggle } from "./them-toggle";

const Header = () => {
  const NavLinks = [
    {
      name: "Home",
      href: "/",
      id: 1,
    },
    {
      name: "About",
      href: "/",
      id: 2,
    },
    {
      name: "Projects",
      href: "/",
      id: 3,
    },
    {
      name: "Testimonial",
      href: "/",
      id: 4,
    },
    {
      name: "Blog",
      href: "/",
      id: 5,
    },
    {
      name: "Contact",
      href: "/",
      id: 5,
    },
  ];
  return (
    <nav className="sticky top-0 z-10 bg-white dark:bg-background backdrop-filter backdrop-blur-lg bg-opacity-30 border-b dark:border-gray-800 border-gray-200 firefox:bg-opacity-90">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-2xl dark:text-white text-gray-900 font-semibold">
            Logo
          </span>
          <div className="flex space-x-5 text-gray-900">
            {NavLinks.map((link) => (
              <Link className=" dark:text-white" href={link.href} key={link.id}>
                {link.name}
              </Link>
            ))}
          </div>
          <ThemeModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Header;
