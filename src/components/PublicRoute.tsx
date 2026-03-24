import type React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }: { children: React.ReactNode }) => {
    const token =
        useSelector((state: RootState) => state.auth.token) ||
        localStorage.getItem("token");

    if (token) {
        return <Navigate to="/" />;
    }
    return children;
};
