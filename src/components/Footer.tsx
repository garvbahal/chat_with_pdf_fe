import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer className="mt-24 border-t border-slate-200 bg-white/80">
            <div className="mx-auto grid w-full max-w-310 gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
                <div>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-2xl font-black tracking-tight text-slate-900"
                    >
                        <span className="inline-block h-2.5 w-2.5 rounded-full bg-slate-900" />
                        ChatPDF
                    </Link>
                    <p className="mt-4 max-w-md text-base leading-relaxed text-slate-600">
                        Chat with your PDFs, summarize complex documents, and
                        find answers instantly with a clean AI workspace.
                    </p>
                </div>

                <div>
                    <h4 className="font-display text-2xl text-slate-800">
                        Product
                    </h4>
                    <ul className="mt-4 space-y-2 text-slate-600">
                        <li>
                            <a
                                href="/#features"
                                className="transition hover:text-slate-900"
                            >
                                Features
                            </a>
                        </li>
                        <li>
                            <a
                                href="/#pricing"
                                className="transition hover:text-slate-900"
                            >
                                Use Cases
                            </a>
                        </li>
                        <li>
                            <Link
                                to="/dashboard"
                                className="transition hover:text-slate-900"
                            >
                                Dashboard
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-display text-2xl text-slate-800">
                        Account
                    </h4>
                    <ul className="mt-4 space-y-2 text-slate-600">
                        <li>
                            <Link
                                to="/login"
                                className="transition hover:text-slate-900"
                            >
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/signup"
                                className="transition hover:text-slate-900"
                            >
                                Get Started
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-slate-200 px-4 py-4 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
                © {new Date().getFullYear()} ChatPDF. Built for clean, fast
                document conversations.
            </div>
        </footer>
    );
}
