import WorkTag from "@/components/work-tag";
import { WORKLIST } from "@/constants/work";
import { Image } from "../image";
import { Link } from "../link";

const WorkList = () => {
  return (
    <div className="pb-[120px]">
      <div className="text-center font-bold text-[28px] my-[40px]">
        Selected Works
      </div>

      <div className="grid grid-cols-3 gap-3">
        {WORKLIST.map((item) => (
          <div key={`work-item-${item.label}`}>
            <Link
              href={item.link}
              className="border block rounded-[16px] p-4 space-y-4"
            >
              {item.image ? (
                <Image
                  src={item.image}
                  width={310}
                  height={310}
                  alt={item.label}
                  sizes="30vw"
                  className="rounded-[16px]"
                  priority
                />
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
