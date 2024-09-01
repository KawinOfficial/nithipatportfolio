"use client";

import { Icon } from "@/components/icon";
import { Link } from "@/components/link";
import { MENU } from "@/constants/menu";
import { useState } from "react";
import cn from "classnames";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="block md:hidden">
      <button type="button" onClick={() => setOpen(!open)}>
        <Icon icon="ci:hamburger-md" className="text-[28px] text-primary" />
      </button>

      <div
        className={cn(
          "fixed top-[62px] inset-x-0 bg-white text-center py-[8px] md:hidden transition-all duration-300",
          {
            "opacity-100": open,
            "opacity-0": !open,
          }
        )}
      >
        {MENU.map(({ label, link }) => (
          <Link
            href={link}
            key={`menu-${label}`}
            className={cn(
              "hover:text-primary text-gray-8b8 text-[12px] block p-[10px]",
              {
                "text-primary": pathname === link,
              }
            )}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
