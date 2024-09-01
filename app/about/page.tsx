import PortImage from "@/components/port-image";
import { PORTLIST } from "@/constants/work";

export default function AboutPage() {
  return (
    <div className="container mx-auto md:max-w-screen-md lg:max-w-screen-lg px-[24px] sm:px-0">
      <article className="h-[460px] md:h-[600px] lg:min-h-screen flex flex-col justify-center">
        <p className="text-primary font-medium text-[12px] md:text-[18px] lg:text-[20px]">
          A snapshot of my path
        </p>
        <p className="text-[16px] md:text-[28px] lg:text-[40px] font-bold leading-tight">
          Where it all began, how it&apos;s impacted my growth, and the
          experiences that defined me.
        </p>
      </article>

      <div className="grid grid-cols-2 pb-[120px] gap-[16px]">
        <PortImage />

        <div className="text-[16px] space-y-[16px]">
          <p className="font-bold text-[20px] leading-tight">
            Hello! I&apos;m Nithipat, Bangkok based UX/UI designer who believe
            that starting with a broad perspective and then focusing on the
            details is the essence of all great design.
          </p>
          <p className="leading-tight">
            My inspiration of drawing and design led me to pursue a
            bachelor&apos;s degree in architecture, with a focus on Thai
            architecture, at Silpakorn University in Bangkok. After graduation,
            I spent a year working as a lighting designer, a role that allowed
            me to explore different aspects of design and ultimately led me to
            discover my passion. I discovered my interest in UX design, drawn by
            the idea of creating intuitive and user-centered digital
            experiences. I enrolled in a UX course, which ultimately guided my
            transition into the role of a UX/UI designer. Today, I&apos;m
            thriving as a UX/UI designer at a software house, where I blend my
            architectural background with my UX expertise to create innovative
            and user-friendly solutions.
          </p>

          <div className="space-y-[8px]">
            <p className="font-semibold">Previously, I am</p>
            {PORTLIST.map(({ tag, company, period }, idx) => (
              <ul
                key={`port-${tag}-${idx}`}
                className="list-outside list-disc pl-7 border border-secondary rounded-[8px]"
              >
                <li className="px-[8px] py-[2px]">
                  <span className="font-semibold">{tag}</span> | {company}{" "}
                  <br />
                  {period}
                </li>
              </ul>
            ))}
          </div>

          <div className="space-y-[8px]">
            <p className="font-semibold">About hobbies and interests</p>
            <p className="leading-tight">
              Whenever I have some free time, the first thing I do is fire up my
              computer. I usually spend it playing{" "}
              <span className="text-primary">games</span> or checking out music{" "}
              <span className="text-primary">podcasts</span> , stories, or
              biographies. Sometimes I&apos;ll{" "}
              <span className="text-primary">doodle</span> or mess around with
              my <span className="text-primary">guitar & bass</span>. Even
              though it might seem like I&apos;m always indoors, I actually love{" "}
              <span className="text-primary">photography</span> and{" "}
              <span className="text-primary">hanging out</span> with friends,
              especially for some{" "}
              <span className="text-primary">badminton</span> and a{" "}
              <span className="text-primary">beer</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
