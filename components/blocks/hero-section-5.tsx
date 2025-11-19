"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronRight } from "lucide-react";

const heroSlides = [
  {
    id: "slide-1",
    src: "/building1.jpg",
    alt: "Modern building exterior",
  },
  {
    id: "slide-2",
    src: "/building1.jpg",
    alt: "Modern building exterior",
  },
  {
    id: "slide-3",
    src: "/building1.jpg",
    alt: "Modern building exterior",
  },
];

export function HeroSection() {
  return (
    <>
      <main className="overflow-x-hidden">
        <section className="relative left-1/2 w-screen -translate-x-1/2">
          <div className="relative min-h-192 py-28 md:min-h-224 md:pb-36 lg:min-h-240 lg:pb-40 lg:pt-67">
            <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
              <div className="mx-auto max-w-xl rounded-3xl border border-white/20 bg-white/40 p-6 text-center text-black backdrop-blur-sm lg:ml-0 lg:max-w-3xl lg:text-left dark:border-white/10 dark:bg-black/40 dark:text-white">
                <h1 className="mt-6 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-12 xl:text-7xl">
                  Quản lý bất động sản chuyên nghiệp
                </h1>
                <p className="mt-8 max-w-2xl text-balance text-lg">
                  Từ chung cư đến khu thương mại, chúng tôi tối ưu vận hành, giữ
                  tài sản luôn sinh lời và nâng trải nghiệm cư dân.
                </p>

                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                  <Button
                    asChild
                    size="lg"
                    className="h-12 rounded-full pl-5 pr-3 text-base"
                  >
                    <Link href="#link">
                      <span className="text-nowrap">Nhận tư vấn</span>
                      <ChevronRight className="ml-1" />
                    </Link>
                  </Button>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="h-12 rounded-full px-5 text-base hover:bg-zinc-950/5 dark:hover:bg-white/5"
                  >
                    <Link href="#link">
                      <span className="text-nowrap">Tìm hiểu dịch vụ</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 overflow-hidden">
              <div className="size-full md:hidden">
                <img
                  src={heroSlides[0].src}
                  alt={heroSlides[0].alt}
                  className="size-full rounded-[inherit] object-cover"
                />
              </div>
              <Carousel className="hidden size-full md:block" opts={{ loop: true }}>
                <CarouselContent className="h-full">
                  {heroSlides.map((slide) => (
                    <CarouselItem key={slide.id} className="h-full">
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        className="size-full rounded-[inherit] object-cover"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-6 border-none bg-black/40 text-white hover:bg-black/60 dark:bg-white/30 dark:text-black dark:hover:bg-white/50" />
                <CarouselNext className="right-6 border-none bg-black/40 text-white hover:bg-black/60 dark:bg-white/30 dark:text-black dark:hover:bg-white/50" />
              </Carousel>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
