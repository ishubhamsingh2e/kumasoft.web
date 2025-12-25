export function Badge({
  description,
  classname,
}: {
  description: string;
  classname?: string;
}) {
  return (
    <span
      className={`rounded-[10px] border-solid border border-black 
  px-3 py-1 text-md font-medium p-1 ${classname}`}
    >
      
      {description}
    </span>
  );
}
