import { Link, NavLink } from "react-router-dom";

export function Navbar() {
    return (
        <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/95 backdrop-blur-md">
            <div className="mx-auto flex w-full max-w-310 items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-2xl font-black tracking-tight text-slate-900"
                >
                    <span className="inline-block h-2.5 w-2.5 rounded-full bg-slate-900" />
                    ChatPDF
                </Link>

                <nav className="hidden items-center gap-8 md:flex">
                    <NavLink
                        to="/login"
                        className="text-lg font-semibold text-slate-600 transition hover:text-slate-900"
                    >
                        Login
                    </NavLink>
                    <NavLink
                        to="/signup"
                        className="rounded-2xl border border-slate-300 bg-white px-5 py-2.5 text-lg font-bold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                        Get Started
                    </NavLink>
                </nav>

                <div className="flex items-center gap-3 md:hidden">
                    <NavLink
                        to="/login"
                        className="text-sm font-semibold text-slate-700 transition hover:text-slate-900"
                    >
                        Login
                    </NavLink>
                    <NavLink
                        to="/signup"
                        className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm"
                    >
                        Get Started
                    </NavLink>
                </div>
            </div>
        </header>
    );
}
