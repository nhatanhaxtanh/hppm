import axios, { AxiosInstance } from 'axios';
import { getApiUrl } from './api-url';
import { useAuthStore } from '../stores/authStore';
import { AuthResponse } from '../service/auth';

const apiUrl = getApiUrl();

declare module 'axios' {
    export interface AxiosRequestConfig {
        _retry?: boolean;
    }
}

export interface Pagination<T> {
    totalElements: number;
    content: T[];
}

export interface ApiResponse<T = unknown> {
    code: number;
    message: string;
    result?: T;
}

export class ApiError extends Error {
    status?: number;
    details: Record<string, string>;

    constructor(
        message: string,
        options?: {
            status?: number;
            details?: Record<string, string>;
        },
    ) {
        super(message);
        this.name = 'ApiError';
        this.status = options?.status;
        this.details = options?.details ?? {};
    }
}

export const throwIfError = (data: ApiResponse, status?: number) => {
    if (status && status >= 400) {
        if (data?.message) {
            throw new ApiError(data.message, { status });
        }
        throw new ApiError('Unexpected server error', { status });
    }
    if (data && data.code !== 1000) {
        throw new ApiError(data.message ?? 'Unknown error', { status });
    }
};

export const deserialize = <T>(data: ApiResponse): T => {
    return data.result as T;
};

export const axiosWrapper: AxiosInstance = axios.create({
    baseURL: apiUrl,
    withCredentials: true,
    validateStatus: () => true,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

axiosWrapper.interceptors.request.use(
    (config) => {
        const url = String(config.url ?? '');
        if (url.includes('/auth/refresh')) return config;
        const token = useAuthStore.getState().accessToken;
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

axiosWrapper.interceptors.response.use(
    (response) => response,
    async (error) => {
        const status = error?.response?.status;
        const originalConfig = error?.config;

        if (status !== 401 || !originalConfig) {
            return Promise.reject(error);
        }

        if (originalConfig._retry) {
            return Promise.reject(error);
        }
        originalConfig._retry = true;

        const url = String(originalConfig.url ?? '');
        if (url.includes('/auth/refresh') || url.includes('/auth/login')) {
            useAuthStore.getState().clear();
            return Promise.reject(error);
        }

        try {
            const refreshRes =
                await axiosWrapper.post<ApiResponse<AuthResponse>>(
                    '/auth/refresh',
                );

            throwIfError(refreshRes.data, refreshRes.status);

            const auth = deserialize<AuthResponse>(refreshRes.data);

            useAuthStore.getState().setToken(auth.token);

            originalConfig.headers = originalConfig.headers ?? {};
            originalConfig.headers['Authorization'] = `Bearer ${auth.token}`;

            return axiosWrapper(originalConfig);
        } catch (e) {
            useAuthStore.getState().clear();

            if (typeof window !== 'undefined') {
                window.location.href = '/login';
            }

            return Promise.reject(e);
        }
    },
);
