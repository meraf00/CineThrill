import Link from 'next/link';

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  isActive?: boolean;
}

export const NavLink = ({ children, href, isActive = false }: NavLinkProps) => {
  return isActive ? (
    <Link
      className="relative flex items-center text-teal text-nowrap
after:absolute after:bottom-0 after:h-[1px] after:w-full 
after:bg-gradient-to-r after:from-transparent after:to-teal"
      href={href}
    >
      {children}
    </Link>
  ) : (
    <Link
      className="relative flex items-center hover:text-teal text-nowrap
      hover:after:absolute hover:after:bottom-0 hover:after:h-[1px] after:w-0 hover:after:w-full 
  hover:after:bg-gradient-to-r hover:after:from-transparent hover:after:to-teal
  transition-all duration-300 ease-in-out after:transition-all after:duration-300 after:ease-in-out"
      href={href}
    >
      {children}
    </Link>
  );
};
