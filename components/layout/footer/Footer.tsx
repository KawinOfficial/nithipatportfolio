import { Icon } from "@/components/icon";
import { Image } from "@/components/image";

const Footer = () => {
  return (
    <div className="bg-primary">
      <div className="flex flex-col items-center justify-center py-[60px] text-white space-y-[15px] container mx-auto md:max-w-screen-md lg:max-w-screen-lg">
        <div className="block relative aspect-square w-[72px] lg:w-[120px]">
          <Image src="/images/logo-white.png" fill alt="logo" sizes="40vw" />
        </div>

        <p className="font-bold text-[16px] lg:text-[24px]">
          Nithipat Lertsopaphan
        </p>

        <div className="flex items-center space-x-[46px]">
          <Icon
            icon="bi:linkedin"
            className="h-[24px] lg:h-[32px] w-[24px] md:w-[32px]"
          />
          <Icon
            icon="icomoon-free:behance2"
            className="h-[24px] lg:h-[32px] w-[24px] md:w-[32px]"
          />
          <Icon
            icon="ri:instagram-fill"
            className="h-[26px] lg:h-[36px] w-[26px] md:w-[36px]"
          />
        </div>

        <p className="text-[14px]">
          © 2024. All Rights Reserved to Nithipat Lertsopaphan.
        </p>
      </div>
    </div>
  );
};

export default Footer;
