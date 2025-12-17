import HeaderClient from './header-client';
import type { NavItem } from '@/lib/service/navbar';
import {
    Cpu,
    Globe,
    Eye,
    Shield,
    Rocket,
    Box,
    Search,
    Palette,
    BookOpen,
    FileText,
    Newspaper,
} from 'lucide-react';

const NAV_ITEMS: NavItem[] = [
    {
        id: 1,
        label: 'Products',
        subMenus: [
            {
                title: 'DX Platform',
                items: [
                    {
                        label: 'Previews',
                        description: 'Helping teams ship 6× faster',
                        icon: Cpu,
                        href: '/products/previews',
                    },
                    {
                        label: 'AI',
                        description: 'Powering breakthroughs',
                        icon: Search,
                        href: '/products/ai',
                    },
                ],
            },
            {
                title: 'Managed Infrastructure',
                items: [
                    {
                        label: 'Rendering',
                        description: 'Fast, scalable, and reliable',
                        icon: Globe,
                        href: '/products/rendering',
                    },
                    {
                        label: 'Observability',
                        description: 'Trace every step',
                        icon: Eye,
                        href: '/products/observability',
                    },
                    {
                        label: 'Security',
                        description: 'Scale without compromising',
                        icon: Shield,
                        href: '/products/security',
                    },
                ],
            },
            {
                title: 'Open Source',
                items: [
                    {
                        label: 'Next.js',
                        description: 'The native Next.js platform',
                        icon: Rocket,
                        href: '/products/nextjs',
                    },
                    {
                        label: 'Turborepo',
                        description: 'Speed with Enterprise scale',
                        icon: Box,
                        href: '/products/turborepo',
                    },
                    {
                        label: 'AI SDK',
                        description: 'The AI Toolkit for TypeScript',
                        icon: Palette,
                        href: '/products/ai-sdk',
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        label: 'Solutions',
        subMenus: [
            {
                title: 'Use Cases',
                items: [
                    {
                        label: 'AI Apps',
                        description: 'Deploy at the speed of AI',
                        icon: Cpu,
                        href: '/solutions/ai-apps',
                    },
                    {
                        label: 'Composable Commerce',
                        description: 'Power storefronts that convert',
                        icon: Box,
                        href: '/solutions/commerce',
                    },
                    {
                        label: 'Marketing Sites',
                        description: 'Launch campaigns fast',
                        icon: Rocket,
                        href: '/solutions/marketing',
                    },
                    {
                        label: 'Multi-tenant Platforms',
                        description: 'Scale apps with one codebase',
                        icon: Globe,
                        href: '/solutions/multi-tenant',
                    },
                    {
                        label: 'Web Apps',
                        description: 'Ship features, not infrastructure',
                        icon: Search,
                        href: '/solutions/web-apps',
                    },
                ],
            },
            {
                title: 'Users',
                items: [
                    {
                        label: 'Platform Engineers',
                        description: 'Automate away repetition',
                        icon: Cpu,
                        href: '/solutions/platform-engineers',
                    },
                    {
                        label: 'Design Engineers',
                        description: 'Deploy for every idea',
                        icon: Palette,
                        href: '/solutions/design-engineers',
                    },
                ],
            },
        ],
    },
    {
        id: 3,
        label: 'Resources',
        subMenus: [
            {
                title: 'Tools',
                items: [
                    {
                        label: 'Resource Center',
                        description: "Today's best practices",
                        icon: BookOpen,
                        href: '/resources',
                    },
                    {
                        label: 'Marketplace',
                        description: 'Extend and automate workflows',
                        icon: Search,
                        href: '/resources/marketplace',
                    },
                    {
                        label: 'Templates',
                        description: 'Jumpstart app development',
                        icon: FileText,
                        href: '/resources/templates',
                    },
                    {
                        label: 'Guides',
                        description: 'Find help quickly',
                        icon: BookOpen,
                        href: '/resources/guides',
                    },
                    {
                        label: 'Partner Finder',
                        description: 'Get help from solution partners',
                        icon: Search,
                        href: '/resources/partners',
                    },
                ],
            },
            {
                title: 'Company',
                items: [
                    {
                        label: 'Customers',
                        description: 'Trusted by the best teams',
                        icon: Newspaper,
                        href: '/company/customers',
                    },
                    {
                        label: 'Blog',
                        description: 'The latest posts and changes',
                        icon: FileText,
                        href: '/blog',
                    },
                    {
                        label: 'Changelog',
                        description: 'See what shipped',
                        icon: BookOpen,
                        href: '/changelog',
                    },
                    {
                        label: 'Press',
                        description: 'Read the latest news',
                        icon: Newspaper,
                        href: '/press',
                    },
                ],
            },
        ],
    },
    { id: 4, label: 'Enterprise', link: '/enterprise' },
    { id: 5, label: 'Docs', link: '/docs' },
    { id: 6, label: 'Pricing', link: '/pricing' },
];

export function Header() {
    return <HeaderClient navItems={NAV_ITEMS} />;
}
