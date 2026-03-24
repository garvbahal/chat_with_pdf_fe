import axios from "axios";
import type { AuthResponse } from "./authTypes";

export const loginUser = async ({
    email,
    password,
}: {
    email: string;
    password: string;
}): Promise<AuthResponse> => {
    const res = await axios.post(`${import.meta.env.VITE_BACKEND}/login`, {
        email,
        password,
    });
    return res.data;
};

export const signupUser = async ({
    email,
    password,
}: {
    email: string;
    password: string;
}): Promise<any> => {
    const res = await axios.post(`${import.meta.env.VITE_BACKEND}/signup`, {
        email,
        password,
    });
    return res.data;
};
