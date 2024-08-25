import WorkTag from "@/components/work-tag";
import { WORKLIST } from "@/constants/work";
import { Image } from "../image";
import { Link } from "../link";

const WorkList = () => {
  return (
    <div className="pb-[40px] md:pb-[120px]">
      <div className="text-center font-bold text-[16px] md:text-[28px] my-[24px] md:my-[40px]">
        Selected Works
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {WORKLIST.map((item) => (
          <div key={`work-item-${item.label}`}>
            <Link
              href={item.link}
              className="border block rounded-[16px] p-4 space-y-4"
            >
              {item.image ? (
                <div className="aspect-square relative">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    sizes="30vw"
                    className="rounded-[16px] object-contain"
                    priority
                  />
                </div>
              ) : (
                <div className="bg-primary aspect-square w-full rounded-[16px]" />
              )}
              <article>
                <WorkTag tags={[item.year, ...item.tag]} />
                <p className="text-primary font-bold text-[20px]">
                  {item.label}
                </p>
              </article>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkList;
