import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "../components/NavBar";
import { OtpInput } from "../components/OtpInput";
import { useMutation } from "@tanstack/react-query";
import { verifyUser } from "../features/auth/authApi";
import toast from "react-hot-toast";
import type { AxiosError } from "axios";
import type { ErrorResponse } from "../features/auth/authTypes";
import { useResendOtpMutation } from "../features/auth/useAuthApiQuery";

export function OtpVerificationPage() {
  const [digits, setDigits] = useState(Array.from({ length: 6 }, () => ""));
  const [cooldown, setCooldown] = useState(120);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (cooldown <= 0) return;

    const timer = setInterval(() => {
      setCooldown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [cooldown]);

  const email = location.state?.email;

  const otp = digits.join("");

  useEffect(() => {
    if (!email) {
      navigate("/signup");
    }
  }, [email, navigate]);

  if (!email) return null;

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

    onSuccess: () => {
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

  const { mutate: resendOtpMutate, isPending: isResendingOtp } =
    useResendOtpMutation();

  const handleResendOtp = () => {
    if (cooldown > 0) return;
    setDigits(Array.from({ length: 6 }, () => ""));

    resendOtpMutate(
      { email },
      {
        onSuccess: (data) => {
          const successMessage = data?.message || "Otp sent successfully";
          toast.success(successMessage);
          setCooldown(120);
        },
        onError: (error) => {
          const errorMessage =
            error.response?.data?.message || "Error while sending the OTP";

          toast.error(errorMessage);
        },
      },
    );
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
            <span className="ml-1 font-medium text-slate-800">{email}</span>.
          </p>

          <form onSubmit={handleVerify} className="mt-6 space-y-5">
            <OtpInput value={digits} onChange={setDigits} />
            <button
              type="submit"
              disabled={otp.length !== 6 || mutation.isPending}
              className="w-full rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:-translate-y-px hover:bg-black cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
            >
              {mutation.isPending ? "Verifying OTP..." : "Verify OTP"}
            </button>
          </form>

          <div className="mt-5 flex items-center justify-between text-sm text-slate-600">
            <button
              type="button"
              onClick={handleResendOtp}
              disabled={cooldown > 0 || isResendingOtp}
              className="font-medium text-cyan-700 hover:text-cyan-800 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
            >
              {cooldown > 0 ? `Resend in ${cooldown}s` : "Resend OTP"}
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
