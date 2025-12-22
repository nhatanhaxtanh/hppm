import z from 'zod';

export type LoginPayload = {
    email: string;
    password: string;
};

export type AuthResponse = {
    authenticated: boolean;
    token: string;
    role: string;
};

export type MeRespose = {
    id: string;
    email: string;
    name: string;
    createdAt: string;
    role: string;
    permissions: string[];
};
/* ---------------------Schema------------------- */
export const loginSchema = z.object({
    email: z
        .string()
        .min(1, 'This field cannot be null')
        .email('Invalid email'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
