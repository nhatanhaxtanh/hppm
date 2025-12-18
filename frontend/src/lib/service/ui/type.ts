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
