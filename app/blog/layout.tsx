import { Footer } from "@/components/footer";
import { NavigationLight } from "@/components/navigation-light";
import { grift } from "../font";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${grift.variable} antialiased bg-contain`}>
      <NavigationLight />
      {children}
    </div>
  );
}
