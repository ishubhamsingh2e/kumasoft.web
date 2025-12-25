interface TabImageSectionProps {
    classname?: string;
    imgSrc?: string;
}


export function TabImageSection({classname,imgSrc}: TabImageSectionProps) {
  return (
    <>
      <img
        
        className={`h-[80vh] w-full rounded-xl object-contain ${classname}`}
        src={imgSrc}
      />
      
    </>
  );
}
