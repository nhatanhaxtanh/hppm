import Snowfall from "@/components/snowfall-background";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-white dark:bg-black">
      <Snowfall className="flex h-screen w-screen items-center justify-center">
        <Carousel className="h-screen w-screen">
          <CarouselContent className="h-screen">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="h-screen pl-0">
                <div className="flex h-screen w-screen">
                  <Card className="h-screen w-screen border-none bg-transparent shadow-none">
                    <CardContent className="flex h-full w-full items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Snowfall>
    </div>
  );
}
