import SocialLink from "@/components/social-link";

export default function ContactPage() {
  return (
    <div className="container mx-auto md:max-w-screen-md lg:max-w-screen-lg px-[24px] sm:px-0">
      <article className="min-h-screen flex flex-col justify-center">
        <p className="text-primary font-medium text-[12px] md:text-[18px] lg:text-[20px]">
          Let’s connect
        </p>
        <p className="text-[16px] md:text-[28px] lg:text-[40px] font-bold leading-tight">
          And explore the opportunities of working together
        </p>
        <div className="text-[16px] md:flex items-center space-y-[10px] md:space-y-0 md:space-x-[24px] md:text-[28px] lg:text-[40px] font-bold leading-tight">
          <div>via followings methods:</div>
          <SocialLink className="text-primary space-x-[24px]" />
        </div>
      </article>
    </div>
  );
}
