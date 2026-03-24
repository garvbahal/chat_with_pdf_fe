import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "../components/NavBar";
import { OtpInput } from "../components/OtpInput";
import { useMutation } from "@tanstack/react-query";
import { verifyUser } from "../features/auth/authApi";
import toast from "react-hot-toast";
import type { AxiosError } from "axios";
import type { ErrorResponse } from "../features/auth/authTypes";

export function OtpVerificationPage() {
    const [digits, setDigits] = useState(Array.from({ length: 6 }, () => ""));
    const location = useLocation();
    const navigate = useNavigate();

    const email = location.state?.email as string;

    const otp = digits.join("");

    useEffect(() => {
        if (!email) {
            navigate("/signup");
        }
    }, [email, navigate]);

    const mutation = useMutation<
        any,
        AxiosError<ErrorResponse>,
        { email: string; otp: string }
    >({
        mutationFn: (data) => {
            console.log("Otp: ", data.otp);
            console.log("Email : ", data.email);
            return verifyUser(data);
        },

        onSuccess: (data) => {
            toast.success("Signup Successfull");
            navigate("/login");
        },

        onError: (error) => {
            console.log(error.response?.data?.message);
            const errorMessage =
                error.response?.data?.message || "OTP verification failed";
            toast.error(errorMessage);
        },
    });

    const handleVerify = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        mutation.mutate({ email, otp });
    };

    return (
        <div className="min-h-screen bg-[#f6f6f8] text-slate-900">
            <Navbar />
            <main className="mx-auto grid w-full max-w-310 place-items-center px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
                <section className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-7 shadow-lg shadow-slate-200/70 sm:p-8">
                    <h1 className="font-display text-5xl leading-tight text-slate-900">
                        Verify OTP
                    </h1>
                    <p className="mt-3 text-base text-slate-600">
                        We’ve sent an OTP to your email
                        <span className="ml-1 font-medium text-slate-800">
                            {email}
                        </span>
                        .
                    </p>

                    <form onSubmit={handleVerify} className="mt-6 space-y-5">
                        <OtpInput value={digits} onChange={setDigits} />
                        <button
                            type="submit"
                            disabled={otp.length !== 6 || mutation.isPending}
                            className="w-full rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:-translate-y-px hover:bg-black disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {mutation.isPending
                                ? "Verifying OTP..."
                                : "Verify OTP"}
                        </button>
                    </form>

                    <div className="mt-5 flex items-center justify-between text-sm text-slate-600">
                        <button
                            type="button"
                            onClick={() =>
                                setDigits(Array.from({ length: 6 }, () => ""))
                            }
                            className="font-medium text-cyan-700 hover:text-cyan-800"
                        >
                            Resend OTP
                        </button>
                        <Link
                            to="/login"
                            className="font-medium text-cyan-700 hover:text-cyan-800"
                        >
                            Back to Login
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    );
}
