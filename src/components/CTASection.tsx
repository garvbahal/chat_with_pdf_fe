import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../app/store";

export const CTASection = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.token);

  const handleOnClick = () => {
    if (user) {
      navigate("/dashboard");
    } else {
      navigate("/signup");
    }
  };
  return (
    <section className="mt-24 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
      <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
        <div>
          <h2 className="font-display text-4xl text-slate-800 sm:text-5xl">
            {user ? "Continue your work" : "Ready to chat with your PDFs?"}
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            {user
              ? "Jump back into your documents and keep the conversation going."
              : "Start free and bring clarity to dense documents in minutes."}
          </p>
        </div>
        <button
          type="button"
          onClick={handleOnClick}
          className="rounded-xl bg-slate-900 px-6 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-black"
        >
          {user ? "Go to Dashboard" : "Get Started"}
        </button>
      </div>
    </section>
  );
};
