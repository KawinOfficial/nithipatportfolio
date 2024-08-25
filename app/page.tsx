import WorkList from "@/components/work-list";

export default function HomePage() {
  return (
    <div className="container mx-auto max-w-[1040px]">
      <article className="py-[172px]">
        <p className="text-primary font-medium text-[20px]">Hi, I’m Nithipat</p>
        <p className="text-[40px] font-bold leading-tight">
          Passionate UX/UI Designer with a mission to design solutions that
          resonate with users and solve their challenges.
        </p>
      </article>

      <WorkList />
    </div>
  );
}
