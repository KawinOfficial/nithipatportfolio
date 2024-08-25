import { Image } from "@/components/image";
import { Link } from "@/components/link";
import { MENU } from "@/constants/menu";
import { ROUTE } from "@/constants/routes";

const MainNav = () => {
  return (
    <div className="py-[14px] flex items-center justify-between bg-white/20  container px-[80px]">
      <div className="flex items-center space-x-4">
        <Link href={ROUTE.HOME}>
          <Image
            src="/images/logo.png"
            width={32}
            height={32}
            alt="logo"
            sizes="20vw"
          />
        </Link>
        <p className="font-bold text-xl text-primary">Nithipat Lertsopaphan</p>
      </div>

      <div className="flex items-center space-x-12 text-gray-8b8">
        {MENU.map(({ label, link }) => (
          <Link href={link} key={`menu-${label}`}>
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainNav;
