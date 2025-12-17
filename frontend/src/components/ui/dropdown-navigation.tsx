'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { DropdownNavigationProps, SubMenu } from '@/lib/service/navbar';

export function DropdownNavigation({
    navItems,
    className,
    isScrolled = false,
}: DropdownNavigationProps & { isScrolled?: boolean }) {
    const pathname = usePathname();

    const [openId, setOpenId] = useState<number | null>(null);
    const [hoverId, setHoverId] = useState<number | null>(null);

    const closeMenu = useCallback(() => setOpenId(null), []);

    const hoverLayoutId = useMemo(
        () => (isScrolled ? 'nav-hover-bg-scrolled' : 'nav-hover-bg'),
        [isScrolled],
    );

    const pillBg = isScrolled ? 'bg-foreground/5' : 'bg-primary/10';

    const isItemActive = useCallback(
        (item: any) => {
            if (item.link && pathname === item.link) return true;

            if (item.subMenus?.length) {
                return item.subMenus.some((sub: any) =>
                    sub.items.some(
                        (it: any) => it.href && pathname.startsWith(it.href),
                    ),
                );
            }
            return false;
        },
        [pathname],
    );

    return (
        <nav className={className} aria-label="Primary">
            <ul
                className="relative flex items-center gap-1"
                onMouseLeave={() => {
                    setHoverId(null);
                    closeMenu();
                }}
            >
                {navItems.map((item) => {
                    const isOpen = item.id === openId;
                    const isHover = item.id === hoverId;
                    const hasSub = !!item.subMenus?.length;
                    const active = isItemActive(item);

                    const baseText = isScrolled
                        ? 'text-foreground/80 hover:text-foreground'
                        : 'text-muted-foreground hover:text-foreground';

                    return (
                        <li
                            key={item.id}
                            className="relative"
                            onMouseEnter={() => {
                                setHoverId(item.id);
                                if (hasSub) setOpenId(item.id);
                            }}
                        >
                            {hasSub ? (
                                <button
                                    type="button"
                                    className={cn(
                                        'group relative flex items-center gap-1 px-4 py-1.5 text-sm transition-colors duration-300',
                                        baseText,
                                        active && 'text-foreground',
                                    )}
                                    aria-haspopup="menu"
                                    aria-expanded={isOpen}
                                    onFocus={() => setOpenId(item.id)}
                                    onBlur={() => closeMenu()}
                                >
                                    <span>{item.label}</span>

                                    <ChevronDown
                                        className={cn(
                                            'h-4 w-4 transition-transform duration-300',
                                            isOpen && 'rotate-180',
                                            'group-hover:rotate-180',
                                        )}
                                    />

                                    {(isHover || isOpen || active) && (
                                        <motion.span
                                            layoutId={hoverLayoutId}
                                            className={cn(
                                                'absolute inset-0 -z-10',
                                                pillBg,
                                            )}
                                            style={{ borderRadius: 999 }}
                                            transition={{
                                                type: 'spring',
                                                stiffness: 520,
                                                damping: 42,
                                            }}
                                        />
                                    )}

                                    {active && (
                                        <span className="bg-foreground/30 absolute -bottom-1 left-1/2 h-[2px] w-6 -translate-x-1/2 rounded-full" />
                                    )}
                                </button>
                            ) : (
                                <Link
                                    href={item.link ?? '/'}
                                    className={cn(
                                        'relative flex items-center px-4 py-1.5 text-sm transition-colors duration-300',
                                        baseText,
                                        active && 'text-foreground',
                                    )}
                                    onMouseEnter={() => setHoverId(item.id)}
                                    onMouseLeave={() => setHoverId(null)}
                                >
                                    <span>{item.label}</span>

                                    {(isHover || active) && (
                                        <motion.span
                                            layoutId={hoverLayoutId}
                                            className={cn(
                                                'absolute inset-0 -z-10',
                                                pillBg,
                                            )}
                                            style={{ borderRadius: 999 }}
                                            transition={{
                                                type: 'spring',
                                                stiffness: 520,
                                                damping: 42,
                                            }}
                                        />
                                    )}

                                    {active && (
                                        <span className="bg-foreground/30 absolute -bottom-1 left-1/2 h-[2px] w-6 -translate-x-1/2 rounded-full" />
                                    )}
                                </Link>
                            )}

                            <AnimatePresence>
                                {isOpen && hasSub && (
                                    <DropdownPanel
                                        subMenus={item.subMenus!}
                                        isScrolled={isScrolled}
                                        onMouseEnter={() => setOpenId(item.id)}
                                        onMouseLeave={closeMenu}
                                    />
                                )}
                            </AnimatePresence>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

function DropdownPanel({
    subMenus,
    isScrolled,
    onMouseEnter,
    onMouseLeave,
}: {
    subMenus: SubMenu[];
    isScrolled?: boolean;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}) {
    return (
        <div
            className="absolute top-full left-0 z-60 pt-2"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <motion.div
                key="panel"
                initial={{ opacity: 0, y: 10, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.985 }}
                transition={{ duration: 0.16 }}
                className={cn(
                    'w-max rounded-2xl border p-4 shadow-sm',
                    isScrolled
                        ? 'border-border/60 bg-background/95 shadow-black/10 backdrop-blur-xl'
                        : 'border-border bg-background',
                )}
                role="menu"
            >
                <div className="flex w-fit gap-9 overflow-hidden">
                    {subMenus.map((sub) => (
                        <div className="w-full" key={sub.title}>
                            <h3 className="text-muted-foreground mb-4 text-sm font-medium capitalize">
                                {sub.title}
                            </h3>

                            <ul className="space-y-1">
                                {sub.items.map((it) => {
                                    const Icon = it.icon;
                                    return (
                                        <li key={it.label}>
                                            <Link
                                                href={it.href ?? '/'}
                                                className={cn(
                                                    'group flex items-start gap-3 rounded-xl p-2 transition-all duration-200',
                                                    'hover:bg-accent/50 hover:shadow-sm',
                                                    'focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none',
                                                )}
                                            >
                                                <div
                                                    className={cn(
                                                        'flex size-9 shrink-0 items-center justify-center rounded-md border',
                                                        'border-border text-foreground transition-all duration-200',
                                                        'group-hover:bg-accent group-hover:text-accent-foreground',
                                                    )}
                                                >
                                                    <Icon className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
                                                </div>

                                                <div className="leading-5">
                                                    <p className="text-foreground text-sm font-medium transition-colors duration-200">
                                                        {it.label}
                                                    </p>
                                                    <p className="text-muted-foreground group-hover:text-foreground/80 text-xs transition-colors duration-200">
                                                        {it.description}
                                                    </p>
                                                </div>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
