import { Button } from "@/components/ui/button";
import Snowfall from "@/components/snowfall-background";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-black">
      <Snowfall className="flex aspect-video items-center justify-center">
        <div className="z-10 space-y-4 text-center lg:space-y-6">
          <h4 className="text-2xl font-semibold text-black/80 lg:text-3xl dark:text-white/80">
            Bundui Components
          </h4>
          <Button>Discover Excellence</Button>
        </div>
      </Snowfall>
    </div>
  );
}
