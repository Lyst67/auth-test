import Link from "next/link";

type NavItemProps = {
  navPage: {
    href: string;
    name: string;
  };
  // adminPageName: boolean;
  // admin?: boolean;
  isActive: boolean;
};

export const NavItem = ({
  navPage,
  // adminPageName,
  // admin,
  isActive,
}: NavItemProps) => {
  return (
    <li className="text-nowrap  hover:scale-110 focus:scale-110 duration-300">
      <Link
        href={navPage.href}
        className={
          !isActive
            ? "main-text ml-4 lg:ml-0"
            : "text-active dark:text-dark-hover flex lg:flex-col gap-2 lg:gap-1 items-center after:h-2 lg:after:h-1 after:w-2 lg:after:w-full  after:-order-1 lg:after:order-1 after:bg-active/70 dark:after:bg-dark-hover after:rounded"
        }
      >
        {navPage.name}
      </Link>
    </li>
  );
};
