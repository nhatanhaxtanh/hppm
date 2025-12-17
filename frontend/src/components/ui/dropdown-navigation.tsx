'use client';

import Link from 'next/link';
import { useCallback, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { DropdownNavigationProps, SubMenu } from '@/lib/service/navbar';

export function DropdownNavigation({
    navItems,
    className,
}: DropdownNavigationProps) {
    const [openId, setOpenId] = useState<number | null>(null);
    const [hoverId, setHoverId] = useState<number | null>(null);

    const closeMenu = useCallback(() => setOpenId(null), []);

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
                                    className="group text-muted-foreground hover:text-foreground relative flex items-center gap-1 px-4 py-1.5 text-sm transition-colors duration-300"
                                    aria-haspopup="menu"
                                    aria-expanded={isOpen}
                                >
                                    <span>{item.label}</span>
                                    <ChevronDown
                                        className={[
                                            'h-4 w-4 transition-transform duration-300',
                                            isOpen ? 'rotate-180' : '',
                                            'group-hover:rotate-180',
                                        ].join(' ')}
                                    />

                                    {(isHover || isOpen) && (
                                        <motion.span
                                            layoutId="nav-hover-bg"
                                            className="bg-primary/10 absolute inset-0 -z-10"
                                            style={{ borderRadius: 999 }}
                                            transition={{
                                                type: 'spring',
                                                stiffness: 500,
                                                damping: 40,
                                            }}
                                        />
                                    )}
                                </button>
                            ) : (
                                <Link
                                    href={item.link ?? '/'}
                                    className="text-muted-foreground hover:text-foreground relative flex items-center px-4 py-1.5 text-sm transition-colors duration-300"
                                    onMouseEnter={() => setHoverId(item.id)}
                                    onMouseLeave={() => setHoverId(null)}
                                >
                                    <span>{item.label}</span>

                                    {isHover && (
                                        <motion.span
                                            layoutId="nav-hover-bg"
                                            className="bg-primary/10 absolute inset-0 -z-10"
                                            style={{ borderRadius: 999 }}
                                            transition={{
                                                type: 'spring',
                                                stiffness: 500,
                                                damping: 40,
                                            }}
                                        />
                                    )}
                                </Link>
                            )}

                            <AnimatePresence>
                                {isOpen && hasSub && (
                                    <DropdownPanel
                                        subMenus={item.subMenus!}
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
    onMouseEnter,
    onMouseLeave,
}: {
    subMenus: SubMenu[];
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}) {
    return (
        <div
            className="absolute top-full left-0 pt-2"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <motion.div
                key="panel"
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: 0.16 }}
                className="border-border bg-background w-max rounded-2xl border p-4 shadow-sm"
                role="menu"
            >
                <div className="flex w-fit gap-9 overflow-hidden">
                    {subMenus.map((sub) => (
                        <div className="w-full" key={sub.title}>
                            <h3 className="text-muted-foreground mb-4 text-sm font-medium capitalize">
                                {sub.title}
                            </h3>

                            <ul className="space-y-2">
                                {sub.items.map((it) => {
                                    const Icon = it.icon;

                                    return (
                                        <li key={it.label}>
                                            <Link
                                                href={it.href ?? '/'}
                                                className={[
                                                    // ✅ hover effect mạnh hơn
                                                    'group flex items-start gap-3 rounded-xl p-2 transition-all duration-200',
                                                    'hover:bg-accent/60 hover:shadow-sm',
                                                    'focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none',
                                                ].join(' ')}
                                            >
                                                <div
                                                    className={[
                                                        'border-border flex size-9 shrink-0 items-center justify-center rounded-md border',
                                                        'text-foreground transition-all duration-200',
                                                        'group-hover:bg-accent group-hover:text-accent-foreground',
                                                    ].join(' ')}
                                                >
                                                    <Icon className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
                                                </div>

                                                <div className="leading-5">
                                                    <p className="text-foreground group-hover:text-foreground text-sm font-medium transition-colors duration-200">
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
