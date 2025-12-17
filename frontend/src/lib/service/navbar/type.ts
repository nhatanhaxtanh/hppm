import type React from 'react';

export type SubMenuItem = {
    label: string;
    description: string;
    icon: React.ElementType;
    href?: string;
};

export type SubMenu = {
    title: string;
    items: SubMenuItem[];
};

export type NavItem = {
    id: number;
    label: string;
    link?: string;
    subMenus?: SubMenu[];
};

export type DropdownNavigationProps = {
    navItems: NavItem[];
    className?: string;
    isScrolled?: boolean;
};
