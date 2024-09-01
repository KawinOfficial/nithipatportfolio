import { Image } from "../image";

const PortImage = () => {
  return (
    <div className="space-y-[8px]">
      <div className="aspect-[512/332] relative">
        <Image
          src="/images/portfolio/pic.png"
          alt="portfolio"
          fill
          sizes="30vw"
          className="rounded-[8x] object-contain"
          priority
        />
      </div>
      <div className="grid grid-cols-2 gap-[8px]">
        <div className="aspect-[252/448] relative row-span-2">
          <Image
            src="/images/portfolio/pic2.png"
            alt="portfolio"
            fill
            sizes="30vw"
            className="rounded-[8x] object-contain"
            priority
          />
        </div>
        <div className="aspect-[252/220] relative">
          <Image
            src="/images/portfolio/pic3.png"
            alt="portfolio"
            fill
            sizes="30vw"
            className="rounded-[8x] object-contain"
            priority
          />
        </div>
        <div className="aspect-[252/220] relative">
          <Image
            src="/images/portfolio/pic4.png"
            alt="portfolio"
            fill
            sizes="30vw"
            className="rounded-[8x] object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default PortImage;
