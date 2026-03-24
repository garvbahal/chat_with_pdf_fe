import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthForm } from "../components/AuthForm";
import { AuthShowcase } from "../components/AuthShowcase";
import { Navbar } from "../components/NavBar";
import type { AuthMode } from "../types/globaltypes";
import { useMutation } from "@tanstack/react-query";
import { loginUser, signupUser } from "../features/auth/authApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../features/auth/authSlice";
import toast from "react-hot-toast";
import type { AxiosError } from "axios";
import type { AuthResponse, ErrorResponse } from "../features/auth/authTypes";
import type { AppDispatch } from "../app/store";

interface AuthPageProps {
    mode: AuthMode;
}

export function AuthPage({ mode }: AuthPageProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const mutation = useMutation<
        AuthResponse,
        AxiosError<ErrorResponse>,
        { email: string; password: string }
    >({
        mutationFn: (data) => {
            return mode === "login" ? loginUser(data) : signupUser(data);
        },

        onSuccess: (data /* this is response data */) => {
            if (mode === "login") {
                toast.success("Logged in Successfully");
                dispatch(setCredentials(data));

                navigate("/dashboard");
            } else {
                toast.success("OTP sent to your email");
                navigate("/verify-otp", { state: { email: email } });
            }
        },
        onError: (error) => {
            console.log(error);
            const message = error?.response?.data?.message || "Login failed";
            toast.error(message);
        },
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        mutation.mutate({ email, password });
    };

    return (
        <div className="min-h-screen bg-[#f6f6f8] text-slate-900">
            <Navbar />
            <main className="mx-auto grid w-full max-w-310 items-center gap-6 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-14">
                <AuthShowcase mode="signup" />
                <div className="mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end">
                    <AuthForm
                        mode={mode}
                        email={email}
                        password={password}
                        onEmailChange={setEmail}
                        onPasswordChange={setPassword}
                        onSubmit={handleSubmit}
                        isPending={mutation.isPending}
                    />
                </div>
            </main>
        </div>
    );
}
