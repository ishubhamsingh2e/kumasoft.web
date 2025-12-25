import { TabSectionCard } from "./tab-section-card";
import { TabSectionCardProps } from "./tab-section-card";

interface TabCardInfoSectionProps {
  cards: TabSectionCardProps[];
}

export default function TabCardInfoSection({ cards }: TabCardInfoSectionProps) {
  return (
    <>
    <div className="grid grid-cols-3 gap-10 ">
      {cards.map((card, index) => (
        <TabSectionCard
          key={`tab-card-${index}`}
          icon={card.icon}
          heading={card.heading}
          description={card.description}
        />
      ))}
      </div>
    </>
  );
}
