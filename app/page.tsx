import Image from "next/image";
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
        <Carousel className="h-[75vh] w-[80vw] max-w-5xl">
          <CarouselContent className="h-full">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="h-full pl-0">
                <div className="flex h-full w-full">
                  <Card className="h-full w-full border-none bg-transparent shadow-none">
                    <CardContent className="flex h-full w-full items-center justify-center p-0">
                      <div className="relative h-full w-full">
                        <Image
                          src="/building.jpg"
                          alt={`Building slide ${index + 1}`}
                          fill
                          className="object-cover"
                          priority={index === 0}
                        />
                      </div>
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
