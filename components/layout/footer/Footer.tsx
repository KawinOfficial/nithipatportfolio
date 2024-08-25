import { Icon } from "@/components/icon";
import { Image } from "@/components/image";

const Footer = () => {
  return (
    <div className="bg-primary flex flex-col items-center justify-center py-[60px] text-white space-y-[15px]">
      <Image
        src="/images/logo-white.png"
        width={120}
        height={120}
        alt="logo"
        sizes="40vw"
      />

      <p className="font-bold text-[24px]">Nithipat Lertsopaphan</p>

      <div className="flex items-center space-x-[46px]">
        <Icon icon="bi:linkedin" className="h-[32px] w-[32px]" />
        <Icon icon="icomoon-free:behance2" className="h-[32px] w-[32px]" />
        <Icon icon="ri:instagram-fill" className="h-[36px] w-[36px]" />
      </div>
    </div>
  );
};

export default Footer;
