import { HeroSection } from "@/components/blocks/hero-section-5";
import { Feature108 } from "@/components/blocks/shadcnblocks-com-feature108";
import { HandHelping, Users, Zap } from "lucide-react";

const demoData = {
  badge: "shadcnblocks.com",
  heading: "Chúng tôi có thể giúp gì cho bạn?",
  imageSrc: "https://www.shadcnblocks.com/images/block/placeholder-1.svg",
  imageAlt: "placeholder",
  features: [
    {
      icon: <HandHelping className="h-auto w-5" />,
      title: "Flexible Support",
      description:
        "Benefit from around-the-clock assistance to keep your business running smoothly.",
    },
    {
      icon: <Users className="h-auto w-5" />,
      title: "Collaborative Tools",
      description:
        "Enhance teamwork with tools designed to simplify project management and communication.",
    },
    {
      icon: <Zap className="h-auto w-5" />,
      title: "Lightning Fast Speed",
      description:
        "Experience the fastest load times with our high performance servers.",
    },
  ],
};

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-white dark:bg-black">
      <HeroSection />
      <Feature108 />;
    </main>
  );
}
