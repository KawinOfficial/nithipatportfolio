import WorkList from "@/components/work-list";

export default function HomePage() {
  return (
    <div className="container mx-auto md:max-w-screen-md lg:max-w-screen-lg px-[24px] sm:px-0">
      <article className="h-[460px] md:h-[600px] lg:min-h-screen flex flex-col justify-center">
        <p className="text-primary font-medium text-[12px] md:text-[18px] lg:text-[20px]">
          Hi, I’m Nithipat
        </p>
        <p className="text-[16px] md:text-[28px] lg:text-[40px] font-bold leading-tight">
          Passionate UX/UI Designer with a mission to design solutions that
          resonate with users and solve their challenges.
        </p>
      </article>

      <WorkList />
    </div>
  );
}
