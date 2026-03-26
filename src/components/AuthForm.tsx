import { Link } from "react-router-dom";
import type { AuthMode } from "../types/globaltypes";

interface AuthFormProps {
  mode: AuthMode;
  email: string;
  password: string;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  isPending: boolean;
}

export function AuthForm({
  mode,
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  isPending,
}: AuthFormProps) {
  const isSignup = mode === "signup";
  const infoPoints = isSignup
    ? [
        "No credit card needed",
        "Start with your first upload instantly",
        "Works for research, legal, and docs",
      ]
    : [
        "Secure access to your saved chats",
        "Continue exactly where you left off",
        "Designed for speed and focus",
      ];

  return (
    <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-7 shadow-lg shadow-slate-200/70 sm:p-8">
      <h1 className="font-display text-4xl leading-tight text-slate-900 sm:text-5xl">
        {isSignup ? "Create your account" : "Welcome back"}
      </h1>
      <p className="mt-3 text-base text-slate-600">
        {isSignup
          ? "Start chatting with your PDFs in seconds."
          : "Login to continue your PDF conversations."}
      </p>

      <ul className="mt-5 space-y-2 text-sm text-slate-600">
        {infoPoints.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-slate-900" />
            {item}
          </li>
        ))}
      </ul>

      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        <label className="block text-sm font-medium text-slate-700">
          Email
          <input
            type="email"
            value={email}
            onChange={(event) => onEmailChange(event.target.value)}
            required
            className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
            placeholder="you@example.com"
          />
        </label>

        <label className="block text-sm font-medium text-slate-700">
          Password
          <input
            type="password"
            value={password}
            onChange={(event) => onPasswordChange(event.target.value)}
            required
            className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
            placeholder="••••••••"
          />
        </label>

        <button
          type="submit"
          disabled={isPending}
          className={`w-full rounded-xl px-4 py-2.5 text-sm font-medium cursor-pointer text-white transition
                    ${
                      isPending
                        ? "bg-slate-400 disabled:cursor-not-allowed"
                        : "bg-slate-900 hover:-translate-y-px hover:bg-black"
                    }`}
        >
          {isPending ? "Processing..." : isSignup ? "Sign Up" : "Login"}
        </button>
      </form>

      <p className="mt-5 text-sm text-slate-600">
        {isSignup ? "Already have an account?" : "Don’t have an account?"}{" "}
        <Link
          to={isSignup ? "/login" : "/signup"}
          className="font-medium text-cyan-700 hover:text-cyan-800"
        >
          {isSignup ? "Login" : "Sign Up"}
        </Link>
      </p>
    </div>
  );
}
