"use client";

import { usePathname } from "next/navigation";
import { NavItem } from "./navItem";

interface NavLinksProps {
  navPages: { href: string; name: string }[];
  // admin?: boolean;
}

function NavLinks({ navPages }: NavLinksProps) {
  const currentPath = usePathname();

  const isActive = (navPageHref: string) => {
    return (
      currentPath === navPageHref || currentPath.startsWith(navPageHref + "/")
    );
  };

  return (
    <nav>
      <ul className="flex gap-8 text-base font-medium xl:text-base">
        {navPages.map((navPage) => {
          const active = isActive(navPage.href);
          // const adminPageName = navPage.name === "Адмін";

          return (
            <NavItem
              isActive={active}
              navPage={navPage}
              // adminPageName={adminPageName}
              // admin={admin}
              key={navPage.name}
            />
          );
        })}
      </ul>
    </nav>
  );
}

export default NavLinks;
