export interface TabSectionCardProps {
  icon: React.ReactNode;
  heading: string;
  description: string;
}

export function TabSectionCard({
  icon,
  heading,
  description,
}: TabSectionCardProps) {
  return (
    <div className="hover:bg-gray-100 transition-colors duration-200 ease-in-out rounded-lg p-8">
      <div
        className="flex items-center justify-center w-15 h-15 rounded-full 
        bg-[color-mix(in_srgb,color-mix(in_srgb,#111013_50%,white)_8%,rgba(0,0,0,0))]
        mb-4 font-medum"
      >
        {icon}
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">{heading}</h3>
        <p className="text-md font-medium text-gray-700">{description}</p>
      </div>
    </div>
  );
}
