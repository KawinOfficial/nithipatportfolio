import { Image } from "@/components/image";
import { Link } from "@/components/link";
import { MENU } from "@/constants/menu";
import { ROUTE } from "@/constants/routes";
import MobileNav from "@/components/layout/mobile-nav";

const MainNav = () => {
  return (
    <div className="fixed z-20 px-[24px] sm:px-0 py-[14px] inset-x-0 top-0 flex items-center justify-between bg-white md:bg-white/20 max-w-screen-sm mx-auto md:max-w-screen-md lg:max-w-screen-lg">
      <div className="flex items-center space-x-4">
        <Link
          href={ROUTE.HOME}
          className="block relative aspect-square w-[28px] md:w-[36px] lg:w-[40px]"
        >
          <Image src="/images/logo.png" alt="logo" sizes="20vw" fill />
        </Link>
        <p className="font-bold text-xl text-primary hidden lg:block">
          Nithipat Lertsopaphan
        </p>
      </div>

      <div className="items-center space-x-12 hidden md:flex md:text-[16px] lg:text-[20px]">
        {MENU.map(({ label, link }) => (
          <Link
            href={link}
            key={`menu-${label}`}
            className="hover:text-primary text-gray-8b8 font-medium"
          >
            {label}
          </Link>
        ))}
      </div>

      <MobileNav />
    </div>
  );
};

export default MainNav;
