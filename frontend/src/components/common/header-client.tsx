'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { DropdownNavigation } from '@/components/ui/dropdown-navigation';
import type { NavItem } from '@/lib/service/navbar';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ArrowUp, ChevronDown, Settings } from 'lucide-react';
import { ThemeToggleButton } from './theme-toggle';
import { motion } from 'framer-motion';

export default function HeaderClient({ navItems }: { navItems: NavItem[] }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const navbarHeight = isScrolled ? 'h-14' : 'h-16 md:h-18 lg:h-20';

    return (
        <>
            <a
                href="#main"
                className="focus:bg-background sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-lg focus:px-3 focus:py-2 focus:shadow"
            >
                Skip to content
            </a>

            <header
                className={cn(
                    'fixed top-0 isolate z-50 w-full transition-all duration-500 ease-in-out',
                    isScrolled
                        ? 'bg-background/75 border-border/60 border-b shadow-lg shadow-black/5 backdrop-blur-2xl'
                        : 'bg-transparent',
                )}
            >
                <div
                    className={cn(
                        'mx-auto w-full transition-all duration-300',
                        isScrolled
                            ? 'max-w-none px-6 lg:px-10'
                            : 'max-w-7xl px-4 sm:px-6',
                    )}
                >
                    <div
                        className={cn(
                            'relative flex w-full items-center justify-between',
                            'px-3 sm:px-4',
                            'transition-all duration-300',
                            navbarHeight,
                        )}
                    >
                        <motion.div
                            layout
                            className="shrink-0"
                            transition={{
                                type: 'spring',
                                stiffness: 220,
                                damping: 28,
                                mass: 0.9,
                            }}
                            animate={{
                                x: 0,
                                scale: isScrolled ? 0.96 : 1,
                            }}
                        >
                            <Link
                                href="/"
                                aria-label="HPPM Home"
                                className="flex items-center md:static md:mr-0 md:translate-x-0"
                            >
                                <div className="relative flex h-11 w-45 items-center sm:h-12 sm:w-50 md:h-14 md:w-55">
                                    <Image
                                        src="/logoHPPM.png"
                                        alt="HPPM"
                                        fill
                                        priority
                                        quality={100}
                                        sizes="(max-width: 768px) 220px, 260px"
                                        className={cn(
                                            'origin-left object-contain drop-shadow-sm',
                                            'absolute top-5 right-0.75',
                                            'scale-x-[1.05] scale-y-[0.85]',
                                        )}
                                    />
                                </div>
                            </Link>
                        </motion.div>

                        <div className="hidden flex-1 justify-center px-6 md:flex lg:hidden">
                            <DropdownNavigation
                                navItems={navItems}
                                isScrolled={isScrolled}
                                wrap
                                className={cn('max-w-full')}
                            />
                        </div>

                        <div className="absolute left-1/2 hidden -translate-x-1/2 lg:flex">
                            <DropdownNavigation
                                navItems={navItems}
                                isScrolled={isScrolled}
                            />
                        </div>

                        <div className="hidden items-center gap-2 md:flex">
                            <ThemeToggleButton
                                className={cn(
                                    'h-10 w-10',
                                    isScrolled
                                        ? 'border-border/60 bg-background/70 hover:bg-accent/60 backdrop-blur'
                                        : 'border-border bg-background/40 hover:bg-accent/60',
                                )}
                            />
                        </div>

                        <Sheet
                            open={isMobileOpen}
                            onOpenChange={setIsMobileOpen}
                        >
                            <SheetTrigger asChild className="md:hidden">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className={cn(
                                        'transition-all duration-300',
                                        isScrolled
                                            ? 'border border-white/20 bg-white/60 backdrop-blur-sm hover:bg-white/80 hover:shadow-md'
                                            : 'hover:bg-accent/80',
                                    )}
                                >
                                    <Menu
                                        className={cn(
                                            'transition-all duration-300',
                                            isScrolled ? 'h-4 w-4' : 'h-5 w-5',
                                        )}
                                    />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </SheetTrigger>

                            <SheetContent
                                side="right"
                                className="w-87.5 p-0 sm:w-100"
                            >
                                <div className="flex h-full flex-col">
                                    <div className="from-background to-accent/10 flex items-center justify-between gap-6 border-b bg-linear-to-r p-6">
                                        <Link
                                            href="/"
                                            className="flex items-center"
                                            aria-label="HPPM Home"
                                        >
                                            <div
                                                className={cn(
                                                    'relative h-12 w-55 md:h-14 md:w-55',
                                                )}
                                            >
                                                <Image
                                                    src="/logoHPPM.png"
                                                    alt="HPPM"
                                                    fill
                                                    priority
                                                    quality={100}
                                                    sizes="(max-width: 768px) 220px, 260px"
                                                    className={cn(
                                                        'origin-left object-contain',
                                                        'scale-x-[1.05] scale-y-[0.85]',
                                                        'translate-y-px',
                                                        'drop-shadow-sm',
                                                    )}
                                                />
                                            </div>
                                        </Link>
                                        <ThemeToggleButton
                                            className={cn(
                                                'h-10 w-10',
                                                'border-border bg-background/70 hover:bg-accent/60 backdrop-blur',
                                            )}
                                        />
                                    </div>

                                    <div className="flex-1 overflow-y-auto">
                                        <nav
                                            className="space-y-6 p-6"
                                            aria-label="Mobile"
                                        >
                                            <div className="space-y-3">
                                                {navItems.map((item) => {
                                                    const hasSub =
                                                        !!item.subMenus?.length;

                                                    if (!hasSub) {
                                                        return (
                                                            <Link
                                                                key={item.id}
                                                                href={
                                                                    item.link ??
                                                                    '/'
                                                                }
                                                                onClick={() =>
                                                                    setIsMobileOpen(
                                                                        false,
                                                                    )
                                                                }
                                                                className="hover:bg-accent/60 hover:border-border/50 flex items-center justify-between rounded-xl border border-transparent px-4 py-4 font-semibold transition-all duration-200"
                                                            >
                                                                <span>
                                                                    {item.label}
                                                                </span>
                                                            </Link>
                                                        );
                                                    }

                                                    return (
                                                        <details
                                                            key={item.id}
                                                            className="group"
                                                        >
                                                            <summary className="hover:from-accent/50 hover:to-accent/30 hover:border-border/50 flex cursor-pointer items-center justify-between rounded-xl border border-transparent px-4 py-4 transition-all duration-200 hover:bg-linear-to-r">
                                                                <div className="flex items-center space-x-3">
                                                                    <div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-lg">
                                                                        <Settings className="text-primary h-4 w-4" />
                                                                    </div>
                                                                    <span className="font-semibold">
                                                                        {
                                                                            item.label
                                                                        }
                                                                    </span>
                                                                </div>
                                                                <ChevronDown className="text-muted-foreground h-4 w-4 transition-transform group-open:rotate-180" />
                                                            </summary>

                                                            <div className="mt-3 space-y-3 pl-2">
                                                                {item.subMenus?.map(
                                                                    (
                                                                        sub,
                                                                        subIdx,
                                                                    ) => (
                                                                        <div
                                                                            key={
                                                                                sub.title
                                                                            }
                                                                            className="space-y-2"
                                                                        >
                                                                            <div className="text-muted-foreground px-2 text-xs font-semibold tracking-wider uppercase">
                                                                                {
                                                                                    sub.title
                                                                                }
                                                                            </div>

                                                                            <div className="space-y-2">
                                                                                {sub.items.map(
                                                                                    (
                                                                                        it,
                                                                                        idx,
                                                                                    ) => {
                                                                                        const Icon =
                                                                                            it.icon;
                                                                                        return (
                                                                                            <Link
                                                                                                key={
                                                                                                    it.label
                                                                                                }
                                                                                                href={
                                                                                                    it.href ??
                                                                                                    '/'
                                                                                                }
                                                                                                onClick={() =>
                                                                                                    setIsMobileOpen(
                                                                                                        false,
                                                                                                    )
                                                                                                }
                                                                                                className="hover:bg-accent/60 group animate-in fade-in slide-in-from-left-2 flex items-start space-x-3 rounded-xl px-4 py-3 text-sm transition-all duration-200"
                                                                                                style={{
                                                                                                    animationDelay: `${(subIdx * 6 + idx) * 60}ms`,
                                                                                                }}
                                                                                            >
                                                                                                <div
                                                                                                    className={cn(
                                                                                                        'border-border flex h-8 w-8 items-center justify-center rounded-lg border transition-colors',
                                                                                                        it.iconBg ??
                                                                                                            'bg-background',
                                                                                                        'group-hover:brightness-95',
                                                                                                    )}
                                                                                                >
                                                                                                    <Icon
                                                                                                        className={cn(
                                                                                                            'h-4 w-4',
                                                                                                            it.iconColor ??
                                                                                                                'text-foreground',
                                                                                                        )}
                                                                                                    />
                                                                                                </div>

                                                                                                <div className="min-w-0">
                                                                                                    <div className="text-foreground group-hover:text-primary font-medium transition-colors">
                                                                                                        {
                                                                                                            it.label
                                                                                                        }
                                                                                                    </div>
                                                                                                    <div className="text-muted-foreground line-clamp-2 text-xs">
                                                                                                        {
                                                                                                            it.description
                                                                                                        }
                                                                                                    </div>
                                                                                                </div>
                                                                                            </Link>
                                                                                        );
                                                                                    },
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                    ),
                                                                )}
                                                            </div>
                                                        </details>
                                                    );
                                                })}
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </header>

            <div
                className={cn(
                    'transition-all duration-300 ease-in-out',
                    navbarHeight,
                )}
            />

            {isScrolled && (
                <button
                    type="button"
                    onClick={() =>
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                    }
                    className="border-border bg-background/80 hover:bg-background fixed right-6 bottom-6 z-50 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm shadow-lg backdrop-blur"
                    aria-label="Back to top"
                >
                    <ArrowUp className="h-4 w-4" />
                    Top
                </button>
            )}
        </>
    );
}
