import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
      <div className="animate-fade-up">
        <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-slate-800 sm:text-6xl lg:text-7xl">
          Chat with your PDFs instantly - Upload and start now
        </h1>
        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-slate-700 sm:text-2xl">
          Ask questions, generate summaries, and understand long documents
          faster. Skip manual reading and get answers in seconds.
        </p>
      </div>

      <div className="animate-fade-up [animation-delay:120ms]">
        <article className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full bg-indigo-100 blur-3xl" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-700">
              Secure Access
            </div>

            <h3 className="font-display mt-5 text-4xl leading-tight text-slate-800 sm:text-5xl">
              Create your account to unlock PDF chat
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              To keep files private and conversation history synced, upload and
              chat features are available after login.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Step 1
                </p>
                <p className="mt-1 text-base font-semibold text-slate-800">
                  Sign up in seconds
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Step 2
                </p>
                <p className="mt-1 text-base font-semibold text-slate-800">
                  Upload, ask, and explore
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => navigate("/signup")}
                className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-black cursor-pointer"
              >
                Create Account
              </button>
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 cursor-pointer"
              >
                Already have an account
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
