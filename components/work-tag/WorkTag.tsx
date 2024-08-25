interface WorkTagProps {
  tags: (string | number)[];
}

const WorkTag = ({ tags }: WorkTagProps) => {
  return (
    <div className="flex items-center divide-x text-[14px] text-gray-8b8 border-gray-8b8">
      {tags.map((tag, idx) => (
        <p key={idx} className="first:pl-0 px-[8px]">
          {tag}
        </p>
      ))}
    </div>
  );
};

export default WorkTag;
