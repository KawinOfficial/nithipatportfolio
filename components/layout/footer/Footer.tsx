import { Image } from "@/components/image";
import SocialLink from "@/components/social-link";

const Footer = () => {
  return (
    <div className="bg-primary">
      <div className="flex flex-col items-center justify-center py-[60px] text-white space-y-[15px] container mx-auto md:max-w-screen-md lg:max-w-screen-lg px-[24px] sm:px-0">
        <div className="block relative aspect-square w-[72px] lg:w-[120px]">
          <Image src="/images/logo-white.png" fill alt="logo" sizes="40vw" />
        </div>

        <p className="font-bold text-[16px] lg:text-[24px]">
          Nithipat Lertsopaphan
        </p>

        <SocialLink />

        <p className="text-[12px] sm:text-[14px]">
          © 2024. All Rights Reserved to Nithipat Lertsopaphan.
        </p>
      </div>
    </div>
  );
};

export default Footer;
