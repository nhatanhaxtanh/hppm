import type { CSSProperties } from 'react';

type CropBreakpointConfig = {
    x: number;
    y: number;
    scale: number;
    objectPosition: string;
};

type CropConfig = {
    mobile: CropBreakpointConfig;
    desktop: CropBreakpointConfig;
};

const defaultCropConfig: CropConfig = {
    mobile: {
        x: 0,
        y: 0,
        scale: 1,
        objectPosition: 'center',
    },
    desktop: {
        x: 0,
        y: 0,
        scale: 1,
        objectPosition: 'center',
    },
};

export const teamImageCropClassName =
    'object-contain [object-position:var(--crop-object-position-mobile)] [transform:translate(var(--crop-x-mobile),var(--crop-y-mobile))_scale(var(--crop-scale-mobile))] md:[object-position:var(--crop-object-position-desktop)] md:[transform:translate(var(--crop-x-desktop),var(--crop-y-desktop))_scale(var(--crop-scale-desktop))]';

export const homeTestimonialsCropConfig: Record<string, CropConfig> = {
    'Trần Thị Diễm Hương': {
        mobile: { x: 0, y: 0, scale: 1, objectPosition: 'center' },
        desktop: { x: 0, y: 0, scale: 1, objectPosition: 'center' },
    },
    'Nguyễn Lê Duy Khánh': {
        mobile: { x: 0, y: 0, scale: 1, objectPosition: 'center' },
        desktop: { x: 0, y: 0, scale: 1, objectPosition: 'center' },
    },
    'Nguyễn Hoàng Thiên Phúc': {
        mobile: { x: 0, y: 0, scale: 1, objectPosition: 'center' },
        desktop: { x: 0, y: 0, scale: 1, objectPosition: 'center' },
    },
    'Lê Nhật Anh': {
        mobile: { x: 0, y: 0, scale: 1, objectPosition: 'center' },
        desktop: { x: 0, y: 0, scale: 1, objectPosition: 'center' },
    },
};

export const leadersTeamSectionCropConfig: Record<string, CropConfig> = {
    'Trần Thị Diễm Hương': {
        mobile: { x: 12, y: 0, scale: 1.2, objectPosition: 'center' },
        desktop: { x: 12, y: 10, scale: 1.5, objectPosition: 'center' },
    },
    'Nguyễn Lê Duy Khánh': {
        mobile: { x: 0, y: 0, scale: 1.2, objectPosition: 'center' },
        desktop: { x: 12, y: 0, scale: 1.3, objectPosition: 'center' },
    },
    'Nguyễn Hoàng Thiên Phúc': {
        mobile: { x: -15, y: 0, scale: 1.2, objectPosition: 'center' },
        desktop: { x: -22, y: -10, scale: 2, objectPosition: 'center' },
    },
    'Lê Nhật Anh': {
        mobile: { x: 0, y: 0, scale: 1.2, objectPosition: 'center' },
        desktop: { x: 0, y: 8, scale: 1.4, objectPosition: 'center' },
    },
};

export const animatedTestimonialsCropConfig: Record<string, CropConfig> = {
    'Trần Thị Diễm Hương': {
        mobile: { x: 20, y: 50, scale: 1.9, objectPosition: 'center' },
        desktop: { x: 10, y: 35, scale: 1.8, objectPosition: 'center' },
    },
    'Nguyễn Lê Duy Khánh': {
        mobile: { x: 0, y: 30, scale: 1.4, objectPosition: 'center' },
        desktop: { x: 0, y: 30, scale: 1.4, objectPosition: 'center' },
    },
    'Nguyễn Hoàng Thiên Phúc': {
        mobile: { x: -20, y: -20, scale: 1.9, objectPosition: 'center' },
        desktop: { x: -20, y: -20, scale: 1.9, objectPosition: 'center' },
    },
    'Lê Nhật Anh': {
        mobile: { x: 0, y: 40, scale: 1.7, objectPosition: 'center' },
        desktop: { x: 0, y: 40, scale: 1.7, objectPosition: 'center' },
    },
};

const toStyle = (crop: CropConfig): CSSProperties =>
    ({
        '--crop-x-mobile': `${crop.mobile.x}px`,
        '--crop-y-mobile': `${crop.mobile.y}px`,
        '--crop-scale-mobile': `${crop.mobile.scale}`,
        '--crop-object-position-mobile': crop.mobile.objectPosition,
        '--crop-x-desktop': `${crop.desktop.x}px`,
        '--crop-y-desktop': `${crop.desktop.y}px`,
        '--crop-scale-desktop': `${crop.desktop.scale}`,
        '--crop-object-position-desktop': crop.desktop.objectPosition,
    }) as CSSProperties;

export const getHomeTestimonialsCropStyle = (name: string): CSSProperties =>
    toStyle(homeTestimonialsCropConfig[name] ?? defaultCropConfig);

export const getLeadersTeamSectionCropStyle = (name: string): CSSProperties =>
    toStyle(leadersTeamSectionCropConfig[name] ?? defaultCropConfig);

export const getAnimatedTestimonialsCropStyle = (
    name: string,
): CSSProperties =>
    toStyle(animatedTestimonialsCropConfig[name] ?? defaultCropConfig);
