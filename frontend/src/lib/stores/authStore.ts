import { create } from 'zustand';
import { User } from '../service/account';

const ACCESS_TOKEN_EXPIRES_IN = 900;

type AuthState = {
    accessToken: string | null;
    user: User | null;
    expiresAt: number | null;
    bootstrapped: boolean;
    setBootstrapped: (v: boolean) => void;
    setToken: (token: string | null) => void;
    setUser: (user: User | null) => void;
    clear: () => void;
    isAccessTokenValid: () => boolean;
};

export const useAuthStore = create<AuthState>((set, get) => ({
    accessToken: null,
    user: null,
    expiresAt: null,
    bootstrapped: false,
    setBootstrapped: (v) => set({ bootstrapped: v }),
    setToken: (token) => {
        if (!token) return set({ accessToken: null, expiresAt: null });

        const expiresAt = Date.now() + ACCESS_TOKEN_EXPIRES_IN * 1000;

        return set({ accessToken: token, expiresAt });
    },
    setUser: (user) => set({ user }),
    clear: () => set({ accessToken: null, user: null, expiresAt: null }),
    isAccessTokenValid: () => {
        const { accessToken, expiresAt } = get();
        if (!accessToken || !expiresAt) return false;
        return Date.now() < expiresAt;
    },
}));
