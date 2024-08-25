import { Image } from "@/components/image";
import { Link } from "@/components/link";
import { MENU } from "@/constants/menu";
import { ROUTE } from "@/constants/routes";

const MainNav = () => {
  return (
    <div className="px-[32px] py-[14px] flex items-center justify-between bg-white/20">
      <Link href={ROUTE.HOME}>
        <Image
          src="/images/logo.png"
          width={32}
          height={32}
          alt="logo"
          sizes="20vw"
        />
      </Link>

      <div className="flex items-center space-x-12 text-gray-8b8">
        {MENU.map(({ label, link }, idx) => (
          <Link href={link} key={`menu-${idx}`}>
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainNav;
