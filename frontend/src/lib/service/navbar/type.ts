import type React from 'react';

export type SubMenuItem = {
    label: string;
    description: string;
    icon: React.ElementType;
    href?: string;
    iconBg?: string;
    iconColor?: string;
};

export type SubMenu = {
    title: string;
    items: SubMenuItem[];
};

export type NavItem = {
    id: number;
    label: string;
    subMenus?: { title: string; items: SubMenuItem[] }[];
    link?: string;

    iconTop?: React.ElementType;
};

export type DropdownNavigationProps = {
    navItems: NavItem[];
    className?: string;
    isScrolled?: boolean;
};
