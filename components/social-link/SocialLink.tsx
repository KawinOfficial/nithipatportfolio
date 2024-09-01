import { Icon } from "../icon";
import cn from "classnames";

interface SocialLinkProps {
  className?: string;
}

const SocialLink = ({ className }: SocialLinkProps) => {
  return (
    <div className={cn("flex items-center space-x-[46px]", className)}>
      <Icon icon="bi:linkedin" className="text-[24px] lg:text-[32px]" />
      <Icon icon="tabler:mail-filled" className="text-[30px] lg:text-[40px]" />
      <Icon icon="ri:instagram-fill" className="text-[28px] lg:text-[38px]" />
    </div>
  );
};

export default SocialLink;
