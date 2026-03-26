import type { AuthMode } from "../types/globaltypes";

interface AuthShowcaseProps {
  mode: AuthMode;
}

const bullets = {
  signup: [
    "Ask questions directly from long PDFs",
    "Get concise summaries with context",
    "Save chats and continue anytime",
  ],
  login: [
    "Resume your document conversations",
    "Track every PDF chat in one place",
    "Jump back into active research quickly",
  ],
};

export function AuthShowcase({ mode }: AuthShowcaseProps) {
  const isSignup = mode === "signup";

  return (
    <aside className="hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:block">
      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
        AskDocs Workspace
      </p>
      <h2 className="font-display mt-4 text-5xl leading-tight text-slate-800">
        {isSignup
          ? "Turn PDFs into conversations"
          : "Welcome back to your documents"}
      </h2>
      <p className="mt-5 text-lg leading-relaxed text-slate-600">
        {isSignup
          ? "Create your account and start chatting with reports, handbooks, contracts, and notes instantly."
          : "Login to pick up where you left off and continue extracting insights from your files."}
      </p>
      <ul className="mt-8 space-y-3 text-base text-slate-700">
        {bullets[mode].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-slate-900" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
