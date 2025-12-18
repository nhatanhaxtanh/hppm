// type of carousel picture
export type Option = {
    title: string;
    description: string;
    image: string;
    icon: React.ReactNode;
};

export type Feature = {
    id: number;
    title: string;
    eyebrow: string;
    description: string;
    bullets: string[];
    imageUrl: string;
    icon: React.ReactNode;
    reverse?: boolean;
};

export interface Testimonial {
    id: number;
    quote?: string;
    name: string;
    role: string;
    imageSrc: string;
    imageAlt?: string;
}

export type ServiceItem = {
    id: string;
    title: string;
    content: string;
};

export type Project = {
    title: string;
    category: string;
    href: string;
    imageUrl: string;
    imageAlt: string;
};

export type PostItem = {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    href: string;
    imageUrl: string;
    imageAlt: string;
};

export type Partner = {
    name: string;
    image: string;
};
